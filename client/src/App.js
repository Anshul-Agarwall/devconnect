import React, { useState } from 'react';
import axios from 'axios';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ContactForm from './components/ContactForm';
import LoginForm from './components/Login';
import ShoppingPage from "./components/Shoppingpage";


function App() {
  //const [userExists, setUserExists] = useState(null); // null until login
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();   // 👈 use this for redirects

  const handleLogin = async (email, password) => {
  try {
    const res = await axios.post("http://localhost:5000/api/validate/login", {
      email,
      password,
    });

    if (res.data.success) {
      setEmail(email);
      navigate("/shop"); 
      // setIsLoggedIn(true);
    } else {
      alert("Invalid email or password");
    }
  } catch (err) {
    console.error(err);
    alert("Login failed. Try again.");
  }
};

  // if (!isLoggedIn) {
  //   return <LoginForm onLogin={handleLogin} />;
  // }

return (
    <Routes>
      <Route path="/" element={<LoginForm onLogin={handleLogin} />} />
      <Route path="/contact" element={<ContactForm email={email} />} />
      <Route path="/shop" element={<ShoppingPage email={email} />} />
    </Routes>
);

}

export default App;
