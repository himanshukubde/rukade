import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './layout/Sidebar';
import Dashboard from './components/Dashbord';  // Corrected component name
import Header from './layout/Header';
import Footer from './layout/Footer';
import Client from './components/Client';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';


function MainApp() {
    const [isToggled, setIsToggled] = useState(false);
    const [isSidebarHovered, setIsSidebarHovered] = useState(false);

    useEffect(() => {
        // Reset hover state when toggled is false
        if (!isToggled) {
            setIsSidebarHovered(false);
        }
    }, [isToggled]);

    const handleMouseEnter = () => {
        if (isToggled) {
            setIsSidebarHovered(true);
        }
    };

    const handleMouseLeave = () => {
        if (isToggled) {
            setIsSidebarHovered(false);
        }
    };

    const handleToggleClick = () => {
        setIsToggled((prevState) => !prevState);
    };

    console.log("okkk")
    return (

        <div
            className={`wrapper ${isToggled ? 'toggled' : ''} ${isSidebarHovered ? 'sidebar-hovered' : ''}`}
        >


            <div
                className="sidebar-wrapper"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Sidebar onToggleClick={handleToggleClick} />
            </div>
            <Header />
            <div className="page-wrapper">
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/client" element={<Client />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </div>
            <Footer />


        </div>

    );
}

export default MainApp;
