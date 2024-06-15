import React, { useState } from 'react';
import { Button, Checkbox, Label, TextInput, Select } from "flowbite-react";
import { Link as RouterLink } from "react-router-dom";
import imagebg from "../../../assets/Navbar image/background.jpg";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    membership: '',
    gender: '',
    email: '',
    password: '',
    confirmPassword: '',
    agree: false,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if password and confirm password match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    const handleChange = (event) => {
      const { id, value, type, checked } = event.target;
      setFormData(prevState => ({
        ...prevState,
        [id]: type === 'checkbox' ? checked : value,
      }));
    };

    try {
      const response = await fetch('/api/signup/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      // Handle success, e.g., redirect or show success message
      console.log('Form submitted successfully');
      // Redirect to login page or show success message to user
    } catch (error) {
      console.error('There was an error submitting the form:', error);
      // Handle error, e.g., show error message to user
    }
  };

  


  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url(${imagebg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <form onSubmit={handleSubmit} className="flex flex-col max-w-lg w-full gap-6 p-6 bg-white bg-transparent rounded-lg shadow-md mt-4 mb-4">
        <h2 className="text-2xl font-bold text-center">Register</h2>
        
        <div className="flex flex-wrap mb-4">
          <div className="w-full md:w-1/2 pr-2">
            <Label htmlFor="name" value="Name" />
            <TextInput id="name" type="text" placeholder="Enter your name" required className="w-full" onChange={handleChange} />
          </div>
          <div className="w-full md:w-1/2 pl-2">
            <Label htmlFor="phone" value="Phone Number" />
            <TextInput id="phone" type="tel" placeholder="Enter your phone number" required className="w-full" onChange={handleChange} />
          </div>
        </div>
        
        <div className="flex flex-wrap mb-4">
          <div className="w-full md:w-1/2 pr-2">
            <Label htmlFor="membership" value="Membership" />
            <Select id="membership" required className="w-full" onChange={handleChange}>
              <option value="agent">Agent</option>
              <option value="customer">Customer</option>
              <option value="landlord">Landlord</option>
            </Select>
          </div>
          <div className="w-full md:w-1/2 pl-2">
            <Label htmlFor="gender" value="Gender" />
            <Select id="gender" required className="w-full" onChange={handleChange}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </Select>
          </div>
        </div>
        
        <div className="flex flex-wrap mb-4">
          <div className="w-full pr-2">
            <Label htmlFor="email" value="Email" />
            <TextInput id="email" type="email" placeholder="name@flowbite.com" required className="w-full" onChange={handleChange} />
          </div>
        </div>
        
        <div className="flex flex-wrap mb-4">
          <div className="w-full md:w-1/2 pr-2">
            <Label htmlFor="password" value="Password" />
            <TextInput id="password" type="password" required className="w-full" placeholder="Password" onChange={handleChange} />
          </div>
          <div className="w-full md:w-1/2 pl-2">
            <Label htmlFor="confirmPassword" value="Confirm Password" />
            <TextInput id="confirmPassword" type="password" required className="w-full" placeholder="Confirm Password" onChange={handleChange} />
          </div>
        </div>
        
        <div className="flex items-center gap-2 mb-4">
          <Checkbox id="agree" onChange={handleChange} checked={formData.agree} />
          <Label htmlFor="agree" className="flex">
            I agree with the&nbsp;
            <a href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
              terms and conditions
            </a>
          </Label>
        </div>
        
        <Button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
          Register new account
        </Button>
        
        <p className="text-center">
          Already have an account? <RouterLink to="/login" className="text-cyan-600 hover:underline">Login</RouterLink>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
