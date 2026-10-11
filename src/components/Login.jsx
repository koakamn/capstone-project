import React, { useState } from 'react';
const API = import.meta.env.VITE_API_BASE_URL || '';
export default function Login({ onSuccess = () => {} }) {
  const [email,setEmail] = useState(''); const [password,setPassword] = useState(''); const [message,setMessage] = useState('');
  async function submit(e) { e.preventDefault(); try {
    const res = await fetch(`${API}/api/login`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,password})});
    if(!res.ok) throw new Error('Authentication failed'); const data=await res.json(); setMessage('Login successful.'); onSuccess(data);
  } catch { setMessage('Login API unavailable or credentials were rejected.'); } }
  return <form onSubmit={submit} className="form-stack"><label>Email<input type="email" value={email} onChange={e=>setEmail(e.target.value)} required/></label><label>Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} required/></label><button className="btn primary">Login</button>{message&&<p>{message}</p>}</form>;
}
