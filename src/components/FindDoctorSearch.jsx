import React, { useMemo, useState } from 'react';
const doctors = [
 {id:1,name:'Dr. Maya Patel',specialty:'Family Medicine',location:'Remote consultations',availability:'Today · 2:30 PM'},
 {id:2,name:'Dr. Amir Khan',specialty:'Cardiology',location:'Remote consultations',availability:'Tomorrow · 10:00 AM'},
 {id:3,name:'Dr. Sofia Reyes',specialty:'Pediatrics',location:'Remote consultations',availability:'Today · 4:00 PM'}
];
export default function FindDoctorSearch({ onSelect = () => {} }) {
 const [query,setQuery]=useState('');
 const results=useMemo(()=>doctors.filter(d=>`${d.name} ${d.specialty} ${d.location}`.toLowerCase().includes(query.toLowerCase())),[query]);
 return <div className="doctor-search"><input aria-label="Search doctors" placeholder="Search specialty or doctor name" value={query} onChange={e=>setQuery(e.target.value)}/><div className="doctor-grid">{results.map(d=><article className="doctor-tile" key={d.id}><div className="avatar">{d.name.split(' ').slice(1).map(x=>x[0]).join('')}</div><div><h4>{d.name}</h4><p>{d.specialty}</p><small>{d.availability}</small></div><button className="btn outline" onClick={()=>onSelect(d)}>Select</button></article>)}</div>{results.length===0&&<p>No doctors found. Try another specialty.</p>}</div>;
}
