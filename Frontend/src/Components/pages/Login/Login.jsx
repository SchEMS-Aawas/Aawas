import React, { useState } from 'react';
import { Button, Label, TextInput } from 'flowbite-react';
import { FaGoogle } from 'react-icons/fa';
import logo from "../../../assets/Navbar image/logo.png";
import { useCookies } from 'react-cookie';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [cookies, setCookie] = useCookies(['token']);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const url = "http://127.0.0.1:8000/api/auth/login/";

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        setCookie('token', data.token, { path: '/', maxAge: 3600 * 24 * 7 });
        toast.success('Successfully logged in!', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        console.error("Login failed:", data.error);
        setError(data.error || 'Something went wrong!');
      }
    } catch (error) {
      console.error("Login error:", error);
      setError('Something went wrong! Please try again later.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <ToastContainer />
      <form onSubmit={handleSubmit} className="flex flex-col max-w-md w-full bg-transparent p-6 rounded-lg shadow-md">
        <Link to="/"><img src={logo} alt="logo" className="h-36" /></Link>
        <h2 className="text-2xl font-bold mb-4 text-center text-white">Login</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <div className="mb-4">
          <Label htmlFor="email" value="Email" />
          <TextInput id="email" type="email" placeholder="Enter your Email" required value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="mb-4">
          <Label htmlFor="password" value="Password" />
          <TextInput id="password" type="password" placeholder="Enter your password" required value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </div>

        <Button type="submit" className="mb-4 text-white bg-green-700 rounded-full hover:bg-green-500">
          Login
        </Button>

        {/* <Button 
          type="button" 
          className="mb-4 flex items-center justify-center text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-100 hover:text-white"
        >
          <FaGoogle className="mr-2" />
          Login with Google
        </Button> */}

        <p className="text-center">
          Don't have an account? <a href="/signup" className="text-blue-500">Sign up</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
