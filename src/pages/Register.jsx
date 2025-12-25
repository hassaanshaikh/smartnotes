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
import { useNavigate } from 'react-router-dom';

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
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
       
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required /><br /><br />

        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required /><br /><br />
        
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required /><br /><br />
        
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
