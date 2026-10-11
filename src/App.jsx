import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Notification from './components/Notification.jsx';
import FindDoctorSearch from './components/FindDoctorSearch.jsx';
import AppointmentForm from './components/AppointmentForm.jsx';
import AppointmentFormIC from './components/AppointmentFormIC.jsx';
import GiveReviews from './components/GiveReviews.jsx';
import ProfileCard from './components/ProfileCard.jsx';
import DoctorCard from './components/DoctorCard.jsx';

export default function App() {
  const [notice, setNotice] = useState('');
  const [user, setUser] = useState(null);
  const [doctor, setDoctor] = useState(null);
  return <div className="app-shell">
    <Navbar user={user} onLogout={() => { setUser(null); setNotice('You have been logged out.'); }} />
    <Notification message={notice} onClose={() => setNotice('')} />
    <main>
      <section className="hero" id="home">
        <div className="hero-copy"><span className="eyebrow">CARE THAT COMES CLOSER</span>
          <h1>Healthcare within reach.</h1>
          <p>Connect with trusted healthcare professionals, wherever life takes you.</p>
          <a className="btn primary" href="#appointments">Book an appointment</a>
        </div>
        <div className="hero-art"><div className="art-circle">+</div><div className="doctor-illustration">✚<br/><span>Care for everyone</span></div></div>
      </section>
      <section id="appointments" className="section">
        <div className="section-heading"><span className="eyebrow">FIND THE RIGHT CARE</span><h2>Find a doctor</h2><p>Search by specialty or location and request a convenient appointment.</p></div>
        <FindDoctorSearch onSelect={(d) => {setDoctor(d); setNotice(`Selected ${d.name}. Choose an appointment time below.`);}} />
        <div className="two-col">
          <div className="panel"><h3>Book an appointment</h3><AppointmentForm onSubmit={(data) => setNotice(`Appointment request received for ${data.name}.`)} /></div>
          <div className="panel"><h3>Quick contact request</h3><AppointmentFormIC onSubmit={(data) => setNotice(`Thanks ${data.name}, we will contact you.`)} /></div>
        </div>
        {doctor && <DoctorCard doctor={doctor} onCancel={() => {setDoctor(null);setNotice('Appointment selection cancelled.');}} />}
      </section>
      <section className="section tinted" id="reviews"><div className="section-heading"><span className="eyebrow">PATIENT VOICES</span><h2>Care that listens</h2></div><GiveReviews onSubmit={() => setNotice('Thank you for sharing your feedback.')} /></section>
      <section className="section" id="profile"><div className="section-heading"><span className="eyebrow">YOUR HEALTH JOURNEY</span><h2>Patient profile</h2></div><ProfileCard /></section>
      <section className="cta"><h2>Small steps. Better access to care.</h2><p>StayHealthy is designed to make the next step toward care easier.</p><a className="btn light" href="#appointments">Find a doctor</a></section>
    </main>
    <footer>© 2026 StayHealthy · A fictional non-profit healthcare platform prototype</footer>
  </div>;
}
