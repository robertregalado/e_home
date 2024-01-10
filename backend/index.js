const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
const port = process.env.PORT || 5000;

const db = require('./db'); // Your database connection


// Secret key for JWT

const JWT_SECRET = process.env.JWT_SECRET;

// Middlewares

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsin
app.use(cors())

const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    return res.status(401).send('Access denied. Token missing.');
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    console.error(err);
    res.status(403).send('Access denied. Invalid token.');
  }
};

app.get('/api/lights', async (req, res) => {
    try {
        const lights = await db.query('SELECT * FROM lights');
        res.json(lights.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

app.put('/api/lights/:lightId', async (req, res) => {
    const { lightId } = req.params;
    const { state } = req.body;

    try {
        // Update the light's state in the database
        const query = 'UPDATE lights SET state = $1 WHERE id = $2';
        await db.none(query, [state, lightId]);
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/profile', authenticateJWT, async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM profiles WHERE id = 1'); // Adjust query as needed
    res.json(result.rows[0]);
  
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving profile');
  }
});

app.put('/api/profile/update', async (req, res) => {
  try {
    const { bio } = req.body;

    if (typeof bio !== 'string') {
      return res.status(400).json({ error: 'Invalid bio format' });
    }

    // Assuming you have authentication middleware to identify the user
    const userId = req.user.id; // Get the user's ID from authentication
    const updateQuery = 'UPDATE profiles SET bio = $1 WHERE user_id = $2';
    
    // Update the profile bio with user-specific information
    await db.query(updateQuery, [bio, userId]);

    res.status(200).json({ message: 'Profile updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error updating profile' });
  }
});


// Assuming you have a users table in your database
app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Perform actual authentication logic (e.g., compare credentials)
    // If successful, you can set a token or session to track logged-in state
    // For simplicity, let's assume success and send a simple message
    const query = 'SELECT * FROM profiles WHERE username = $1';
    const result = await db.query(query, [username]);

    if (result.rows.length === 1) {
        const user = result.rows[0];
        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (isPasswordCorrect) {
            // Create a JWT token
           const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
            
           res.status(200).json({ token }); 
        } else {
            res.status(401).send('Invalid credentials');
        }
    } else {
        // User not found
        res.status(404).send('User not found');
    }
 
  } catch (err) {
    console.error(err);
    res.status(401).send('Login failed');
  }
});


app.post('/api/logout', (req, res) => {
  // Perform actual logout logic (e.g., clear tokens or sessions)
  // For simplicity, just send a message indicating logout
  res.status(200).send('Logout successful');
});

app.post('/api/register', async (req, res) => {
  const { name, username, email, password, bio, avatar_url } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user data into profiles table
    const insertQuery = `
      INSERT INTO profiles (name, username, email, password, bio, avatar_url)
      VALUES ($1, $2, $3, $4, $5, $6)
    `;
    await db.query(insertQuery, [name, username, email, hashedPassword, bio, avatar_url]);

    // Send a success response
    res.status(201).send('User registered successfully');
  } catch (error) {
    console.error('Error registering user', error);
    res.status(500).send('An error occurred while registering user');
  }
});


// Other routes for controlling devices, etc.

app.post('/api/lights', async (req, res) => {
    const { name, state } = req.body;

    try {
        const newLight = await db.query(
            'INSERT INTO lights (name, state) VALUES ($1, $2) RETURNING *',
            [name, state]
        );
        res.json(newLight);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
