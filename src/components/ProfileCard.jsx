import React, { useState } from 'react';
export default function ProfileCard() {
 const [editing,setEditing]=useState(false); const [profile,setProfile]=useState({name:'Jordan Lee',email:'jordan@example.com',phone:'+1 555 010 2200'});
 const [draft,setDraft]=useState(profile);
 function save(e){e.preventDefault();setProfile(draft);setEditing(false);}
 return <article className="profile-card"><div className="profile-top"><div className="profile-avatar">JL</div><div><h3>{profile.name}</h3><p>{profile.email}</p></div><button className="btn outline" onClick={()=>{setDraft(profile);setEditing(!editing)}}>{editing?'Cancel':'Edit profile'}</button></div>
 {editing?<form className="form-stack" onSubmit={save}><label>Name<input value={draft.name} onChange={e=>setDraft({...draft,name:e.target.value})} required/></label><label>Email<input type="email" value={draft.email} onChange={e=>setDraft({...draft,email:e.target.value})} required/></label><label>Phone<input value={draft.phone} onChange={e=>setDraft({...draft,phone:e.target.value})}/></label><button className="btn primary">Save changes</button></form>:<p className="profile-phone">Phone: {profile.phone}</p>}</article>;
}
