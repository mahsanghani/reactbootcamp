import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-logo">#VALIDATE</Link>
            <div className="nav-links">
                <Link to="/about" className="nav-link">About</Link>
            </div>
        </nav>
    );
}

function Home() {
    return (
        <div>
            <Navbar />
            <main className="home">
                <div className="hero">
                    <h1>You got the travel plans, we got the travel vans.</h1>
                    <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                    <button className="cta-button">Find your van</button>
                </div>
            </main>
        </div>
    );
}

function About() {
    return (
        <div>
            <Navbar />
            <main className="about">
                <div className="about-hero">
                    <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" alt="Van in nature" className="about-image" />
                </div>
                <div className="about-context">
                    <h1>Don't squeeze in a sedan when you could relax in a van.</h1>
                    <p>Our mission is to enliven your road trip with the perfect travel van rental.</p>
                    <p>Hitch costs extra.</p>
                    <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on four wheels.</p>
                    <div className="about-cta">
                        <h2>Your destination is waiting.<br />Your van is ready.</h2>
                        <button className="cta-button">Explore our vans.</button>
                    </div>
                </div>
            </main>
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(<App />);