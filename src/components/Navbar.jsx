import React from 'react';
export default function Navbar({ user, onLogout }) {
  return <header className="navbar"><a className="brand" href="#home"><span className="brand-mark">+</span>StayHealthy</a>
    <nav><a href="#home">Home</a><a href="#appointments">Appointments</a><a href="#reviews">Reviews</a><a href="#profile">Profile</a></nav>
    <div className="nav-actions">{user ? <><span className="user-label">{user.name}</span><button className="btn outline" onClick={onLogout}>Logout</button></> : <><a href="#appointments" className="nav-login">Login</a><a href="#profile" className="btn primary small">Sign Up</a></>}</div>
  </header>;
}
