// import React from 'react'
// import { Routes, Route, Navigate } from 'react-router-dom'
// import Register from './pages/Register'
// import Login from './pages/Login'
// import Dashboard from './pages/Dashboard'


// const PrivateRoute = ({ children }) => {
// const token = localStorage.getItem('token');
// return token ? children : <Navigate to="/login" />;
// };


// export default function App() {
// return (
// <Routes>
// <Route path="/" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
// <Route path="/register" element={<Register/>} />
// <Route path="/login" element={<Login/>} />
// </Routes>
// )
// }

import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

// PRIVATE ROUTE (Dashboard only)
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" replace />;
};

// PUBLIC ROUTE (Login/Register only when NOT logged in)
const PublicRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? <Navigate to="/dashboard" replace /> : children;
};

export default function App() {
  return (
    <Routes>

      {/* Public pages */}
      <Route path="/" element={<PublicRoute><Login /></PublicRoute>} />
      <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
      <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />

      {/* Private page */}
      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />

      {/* Not found → redirect */}
      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  );
}
