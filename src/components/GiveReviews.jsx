import React, { useState } from 'react';
export default function GiveReviews({ onSubmit = () => {} }) {
 const [rating,setRating]=useState('5'); const [review,setReview]=useState(''); const [submitted,setSubmitted]=useState(false);
 function submit(e){e.preventDefault();onSubmit({rating:Number(rating),review});setSubmitted(true);}
 return <form className="review-form" onSubmit={submit}><label>Rating<select disabled={submitted} value={rating} onChange={e=>setRating(e.target.value)}><option value="5">5 — Excellent</option><option value="4">4 — Very good</option><option value="3">3 — Good</option><option value="2">2 — Fair</option><option value="1">1 — Poor</option></select></label><label>Your review<textarea disabled={submitted} required value={review} onChange={e=>setReview(e.target.value)} placeholder="Tell us about your experience"/></label><button className="btn primary" disabled={submitted}>{submitted?'Review submitted':'Submit review'}</button>{submitted&&<p role="status">Thank you. Your review has been submitted.</p>}</form>;
}
