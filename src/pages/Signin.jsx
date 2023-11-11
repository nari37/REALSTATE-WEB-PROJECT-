import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Signup from './Signup';

export default function Signin() {
  const [formData, setFormData] = useState({
    
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // fetch('http://localhost:5000/backend/auth/signup', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log('Success:', data);
    //     // You can handle the response data here as needed
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //     // Handle any errors here
    //   });
  };

  return (
    <div className="flex justify-center items-center h-screen" style={{ backgroundColor: 'rgb(90, 199, 90)' }}>
      <form className="w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 bg-white p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4 text-center text-green-500">Sign In</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline" type="submit">
            Sign In
          </button>
        </div>
        <p>
           don't have an account? Please{' '}
          <Link to="/signup">
            <span className="text-blue-700">...Signup</span>
          </Link>
        </p>
      </form>
    </div>
  );
}
