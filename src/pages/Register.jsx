// import React, { useState } from 'react'
// import API from '../api'
// import { useNavigate } from 'react-router-dom'


// export default function Register(){
// const [form, setForm] = useState({ name: '', email: '', password: '' });
// const nav = useNavigate();


// const handle = async (e) => {
// e.preventDefault();
// try{
// const res = await API.post('/auth/register', form);
// localStorage.setItem('token', res.data.token);
// nav('/');
// }catch(err){
// alert(err?.response?.data?.msg || 'Error');
// }
// }


// return (
// <form onSubmit={handle}>
// <h2>Register</h2>
// <input placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
// <input placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
// <input placeholder="Password" type="password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} />
// <button type="submit">Register</button>
// </form>
// )
// }

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock } from "lucide-react";

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [name, setName] = useState('');

  const handleRegister = async (e) => {
  e.preventDefault();
  try {
    // include name here
    const res = await axios.post('http://localhost:5000/register', { name, email, password });
    localStorage.setItem('token', res.data.token);
    alert('Registration successful!');
    navigate('/login');
  } catch (err) {
    console.error(err);
    alert('Registration failed');
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-white via-gray-900 to-black text-white">
      <div className="w-full max-w-md bg-gray-900/80 backdrop-blur border border-gray-800 rounded-2xl shadow-2xl p-8">
      <h1 className="text-3xl font-bold text-center mb-2">
        <span className="text-yellow-500">Smart</span>Notes Register
      </h1>
      <p className="text-gray-400 text-center mb-8">
         Welcome back! Please login to your account
      </p>
      <form onSubmit={handleRegister}>

                <div className="mb-5">
          <label className="text-sm text-gray-300">Name</label>
            <div className="flex items-center mt-2 bg-black/40 border border-gray-700 rounded-xl px-4">
              {/* <Mail className="text-gray-400" size={18} /> */}
                <input type="text" placeholder="Name" className="w-full bg-transparent outline-none px-3 py-3 text-sm" value={name} onChange={e => setName(e.target.value)} required />
            </div>
        </div>
        <div className="mb-5">
          <label className="text-sm text-gray-300">Email</label>
            <div className="flex items-center mt-2 bg-black/40 border border-gray-700 rounded-xl px-4">
              <Mail className="text-gray-400" size={18} />
        <input type="email" placeholder="Email"  className="w-full bg-transparent outline-none px-3 py-3 text-sm" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>
        </div>

        <div className="mb-5">
          <label className="text-sm text-gray-300">Password</label>
            <div className="flex items-center mt-2 bg-black/40 border border-gray-700 rounded-xl px-4">
              <Lock className="text-gray-400" size={18} />
                      <input type="password" placeholder="Password" className="w-full bg-transparent outline-none px-3 py-3 text-sm" value={password} onChange={e => setPassword(e.target.value)} required />
            </div>
        </div>

        <button type="submit" className="w-full bg-yellow-500 text-black py-3 rounded-xl font-semibold hover:bg-yellow-400 transition">Register</button>
        <p className="text-center text-gray-400 text-sm mt-6">
         Already create an account please {" "}
         <Link to='/Login'><span className="text-yellow-500 cursor-pointer hover:underline">
            Sign in
           </span></Link>
         </p>
      </form>
      </div>
    </div>
  );
}
