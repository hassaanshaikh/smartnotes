// import React, { useState }

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post('http://localhost:5000/login', { email, password });
    localStorage.setItem('token', res.data.token);
    alert('Login successful!');
    navigate('/dashboard');   // ← ONLY THIS LINE CHANGED
  } catch (err) {
    console.error(err);
    alert('Login failed');
  }
};

  return (
    // <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <div className="min-h-screen flex items-center justify-center bg-white via-gray-900 to-black text-white">
      <div className="w-full max-w-md bg-gray-900/80 backdrop-blur border border-gray-800 rounded-2xl shadow-2xl p-8">
      <h1 className="text-3xl font-bold text-center mb-2">
        <span className="text-yellow-500">Smart</span>Notes Login
      </h1>
      <p className="text-gray-400 text-center mb-8">
         Welcome back! Please login to your account
      </p>
      <form onSubmit={handleLogin}>
        
        <div className="mb-5">
          <label className="text-sm text-gray-300">Email</label>
            <div className="flex items-center mt-2 bg-black/40 border border-gray-700 rounded-xl px-4">
              <Mail className="text-gray-400" size={18} />
              <input type="email" placeholder="Email" className="w-full bg-transparent outline-none px-3 py-3 text-sm" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>
        </div>

        <div className="mb-5">
          <label className="text-sm text-gray-300">Password</label>
            <div className="flex items-center mt-2 bg-black/40 border border-gray-700 rounded-xl px-4">
              <Lock className="text-gray-400" size={18} />
              <input type="password" placeholder="Password"  className="w-full bg-transparent outline-none px-3 py-3 text-sm" value={password} onChange={e => setPassword(e.target.value)} required />
            </div>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="accent-yellow-500" />
             Remember me
          </label>
          <span className="hover:text-yellow-500 cursor-pointer">Forgot password?</span>
        </div>

        <button type="submit" className="w-full bg-yellow-500 text-black py-3 rounded-xl font-semibold hover:bg-yellow-400 transition">Login</button>
        <p className="text-center text-gray-400 text-sm mt-6">
         Don’t have an account?{" "}
         <Link to='/Register'><span className="text-yellow-500 cursor-pointer hover:underline">
            Sign up
           </span></Link>
         </p>
      </form>
    
      </div>
    </div>
    
  );
}


// git init
// git add .
// git commit -m "Initial commit"
// git branch -M main
// git remote add origin https://github.com/USERNAME/REPOSITORY.git
// git push -u origin main