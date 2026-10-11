import React, { useState } from 'react';
export default function DoctorCard({ doctor, onCancel = () => {} }) {
 const [cancelled,setCancelled]=useState(false);
 return <article className="doctor-card"><div><span className="eyebrow">SELECTED DOCTOR</span><h3>{doctor.name}</h3><p>{doctor.specialty} · {doctor.availability}</p><small>{cancelled?'Selection cancelled':'Appointment request not yet confirmed'}</small></div><button className="btn outline" disabled={cancelled} onClick={()=>{setCancelled(true);onCancel();}}>Cancel selection</button></article>;
}
