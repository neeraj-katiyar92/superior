// pages/index.js
"use client"
import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');
  const [to, setTo] = useState('');
  const [response, setResponse] = useState('');

  const sendMessage = async () => {
    try {
      const res = await fetch('/api/users/route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ body: message, to }),
      });

      const data = await res.json();
      setResponse(`Message sent with SID: ${data.messageSid}`);
    } catch (error) {
      setResponse(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h1>Send a WhatsApp Message</h1>
      <input
        type="text"
        placeholder="Message body"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input
        type="text"
        placeholder="Recipient number (e.g., +919354798704)"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <button onClick={sendMessage}>Send Message</button>
      <p>{response}</p>
    </div>
  );
}
