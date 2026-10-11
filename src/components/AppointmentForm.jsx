import React, { useState } from 'react';
export default function AppointmentForm({ onSubmit = () => {} }) {
 const [form,setForm]=useState({name:'',phone:'',date:'',time:''}); const update=e=>setForm({...form,[e.target.name]:e.target.value});
 function submit(e){e.preventDefault();onSubmit(form);setForm({name:'',phone:'',date:'',time:''});}
 return <form className="form-stack" onSubmit={submit}><label>Full name<input name="name" value={form.name} onChange={update} required/></label><label>Phone number<input name="phone" type="tel" value={form.phone} onChange={update} required/></label><div className="two-fields"><label>Date<input name="date" type="date" value={form.date} onChange={update} required/></label><label>Time<input name="time" type="time" value={form.time} onChange={update} required/></label></div><button className="btn primary">Request appointment</button></form>;
}
