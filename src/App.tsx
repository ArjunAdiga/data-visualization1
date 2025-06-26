


import './App.css'
import Dashboard from './pages/Dashboard';
import Signin from './pages/Signin';
import { useAuthStore } from './store/useAuthStore'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const email= useAuthStore(state => state.email)
  const isLogin = !!email 

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={isLogin ?<Dashboard /> :  <Navigate to="/signin" />}/>
        <Route path="/signin" element={<Signin/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
