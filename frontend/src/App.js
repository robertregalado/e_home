import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Search from './components/Search';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import Media from './components/Media';
import Devices from './components/Devices';
import SmartHomeAnalyticsPage from './components/SmartHomeAnalyticsPage';
import Projects from './components/Projects';
import Settings from './components/Settings';
import Lights from './components/LightsComponent';
//import LoginForm from './components/LoginForm';
import LoginPage from './components/LoginPage';
import RegisterForm from './components/RegisterForm';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/smarthomeanalyticspage" element={<SmartHomeAnalyticsPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/devices" element={<Devices />} />
            <Route path="/media" element={<Media />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/lights" element={<Lights />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterForm />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
}

export default App;




