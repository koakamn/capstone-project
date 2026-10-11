import React, { useState } from 'react';
export default function AppointmentFormIC({ onSubmit = () => {} }) {
 const [name,setName]=useState(''); const [phone,setPhone]=useState('');
 function submit(e){e.preventDefault();onSubmit({name,phone});setName('');setPhone('');}
 return <form className="form-stack" onSubmit={submit}><label>Full name<input value={name} onChange={e=>setName(e.target.value)} required/></label><label>Phone number<input type="tel" value={phone} onChange={e=>setPhone(e.target.value)} required/></label><button className="btn primary">Request a call</button></form>;
}
