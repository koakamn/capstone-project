import React, { useState } from 'react';
const API = import.meta.env.VITE_API_BASE_URL || '';
export default function Sign_Up({ onSuccess = () => {} }) {
  const [form, setForm] = useState({role:'Patient',name:'',email:'',phone:'',password:''});
  const [message,setMessage] = useState('');
  const update = e => setForm({...form,[e.target.name]:e.target.value});
  async function submit(e) {
    e.preventDefault();
    try {
      const res = await fetch(`${API}/api/register`, {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(form)});
      if (!res.ok) throw new Error(`Registration API returned ${res.status}`);
      const data = await res.json(); setMessage('Registration successful.'); onSuccess(data);
    } catch (err) { setMessage('API unavailable. Check VITE_API_BASE_URL and backend, then retry.'); }
  }
  return <form onSubmit={submit} className="form-grid"><label>Role<select name="role" value={form.role} onChange={update}><option>Patient</option><option>Doctor</option></select></label>
    <label>Full name<input name="name" required value={form.name} onChange={update}/></label>
    <label>Email<input type="email" name="email" required value={form.email} onChange={update}/></label>
    <label>Phone<input type="tel" name="phone" required value={form.phone} onChange={update}/></label>
    <label className="full">Password<input type="password" name="password" minLength="8" required value={form.password} onChange={update}/></label>
    <button className="btn primary full">Create account</button>{message && <p className="form-message full">{message}</p>}</form>;
}
