import React from 'react';
export default function Notification({ message, onClose }) {
  if (!message) return null;
  return <div className="notification" role="status"><span>{message}</span><button aria-label="Dismiss notification" onClick={onClose}>×</button></div>;
}
