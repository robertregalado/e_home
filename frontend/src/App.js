import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Search from './components/Search';
import Profile from './components/Profile';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Media from './components/Media';
import Devices from './components/Devices';
import Analytics from './components/Analytics';
import Projects from './components/Projects';
import Settings from './components/Settings';
import Lights from './components/LightsComponent';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';



function App() {
    return (
        <Router>
        <Header />
            <div className="flex">
                <Sidebar />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/devices" element={<Devices />} />
                    <Route path="/media" element={<Media />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/lights" element={<Lights />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/register" element={<RegisterForm />} />
                </Routes>
            </div>
        <Footer />
        </Router>
    );
}

export default App;


