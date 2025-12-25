// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function Dashboard() {
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     axios.get('http://localhost:5000/dashboard', {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//     .then(res => setMessage(res.data.message))
//     .catch(err => console.error(err));
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     window.location.reload();
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>Dashboard</h1>
//       <p>{message}</p>
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [name, setName] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    axios.get('http://localhost:5000/dashboard', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => setName(res.data.name)) // <-- get name from response
    .catch(err => console.error(err));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Dashboard</h1>
      <p>Welcome {name} </p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
