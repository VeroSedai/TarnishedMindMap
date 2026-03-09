import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../services/api/supabaseClient';
import './loginPage.css'; // Importa il file CSS personalizzato

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!supabase) {
      console.error("Supabase not configured");
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });
      
    if (error) {
      console.error('Errore di login:', error.message);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          <button type="submit" className="login-button">Login</button>
        </form>
        <button className="guest-button" onClick={() => navigate('/guest')}>
          Continue as Guest
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
