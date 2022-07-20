import React, { useState } from 'react';
import './App.css';

export default function NewPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  async function handleSubmit(e) {
    e.preventDefault();
    
  }

  return (
    <div className='forms'>
      
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label> Email:
          <input onChange={e => setEmail(e.target.value)} value={email} type="email"/>
        </label>
      </form>
      <form>
        <label> Password:
          <input onChange={e => setPassword(e.target.value)} value={password} type="password"/>
        </label>
        <button>
          Take me in!
        </button>
      </form>
    </div>
  );
}
