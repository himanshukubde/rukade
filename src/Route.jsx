import logo from './logo.svg';
import './App.css';
import Sidebar from './layout/Sidebar';
import Dashboard from './components/Dashbord';  // Corrected component name
import Header from './layout/Header';
import Footer from './layout/Footer';
import Client from './components/Client';

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
function App() {
    return (
   
        <Router> 
            <Sidebar />
            <Header />
            <div className="page-wrapper">
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/client" element={<Client />} />
                </Routes>
            </div>
            <Footer />

        </Router>

    );
}

export default App;
