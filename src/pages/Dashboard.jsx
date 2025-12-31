
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Home, Users, Settings, Menu } from "lucide-react";

export default function Dashboard() {
  const [name, setName] = useState('');
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) { navigate("/login"); return; }

    axios.get('http://localhost:5000/dashboard', {
      headers: { Authorization: `Bearer ${token}` }
    })
     .then((res) => {
        setName(res.data.name);
      })
      .catch(() => {
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    // window.location.reload();
    navigate("/login");
  };

  return (
    <div className="flex">
       <Sidebar />

       <div className="flex-1 ml-64">
         <Navbar name={name} handleLogout={handleLogout} />


         <div className="p-6 bg-gray-100 min-h-screen">
           <h2 className="text-2xl font-bold mb-6">Overview</h2>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="bg-white p-6 rounded-lg shadow">
               <h3 className="text-gray-500">Users</h3>
               <p className="text-3xl font-bold">1,245</p>
             </div>

             <div className="bg-white p-6 rounded-lg shadow">
               <h3 className="text-gray-500">Revenue</h3>
               <p className="text-3xl font-bold">$8,540</p>
             </div>

             <div className="bg-white p-6 rounded-lg shadow">
               <h3 className="text-gray-500">Orders</h3>
               <p className="text-3xl font-bold">320</p>
             </div>
           </div>
        </div>
       </div>
    </div>
    // <div style={{ textAlign: 'center', marginTop: '50px' }}>
    //   <h1>Dashboard</h1>
    //   <p>Welcome {name} </p>
    //   <button onClick={handleLogout}>Logout</button>
    // </div>
  );
}

// import React from "react";
// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";

// const Dashboard = () => {
//   return (
//     <div className="flex">
//       <Sidebar />

//       <div className="flex-1 ml-64">
//         <Navbar />

//         <div className="p-6 bg-gray-100 min-h-screen">
//           <h2 className="text-2xl font-bold mb-6">Overview</h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="bg-white p-6 rounded-lg shadow">
//               <h3 className="text-gray-500">Users</h3>
//               <p className="text-3xl font-bold">1,245</p>
//             </div>

//             <div className="bg-white p-6 rounded-lg shadow">
//               <h3 className="text-gray-500">Revenue</h3>
//               <p className="text-3xl font-bold">$8,540</p>
//             </div>

//             <div className="bg-white p-6 rounded-lg shadow">
//               <h3 className="text-gray-500">Orders</h3>
//               <p className="text-3xl font-bold">320</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
