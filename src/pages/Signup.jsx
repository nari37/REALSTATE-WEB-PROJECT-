import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [formData, setFormData] = useState({});
  const [error,setError] = useState(null);
  const [loading,setLoding] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

console.log(formData)

  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoding(true)
   const res = await fetch('/backend/auth/signup',{
    method:'POST',
    headers:{
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(formData),
  
   });


    const data = await res.json()
    if (data.sucuss === false) {
    setError(data.message);
    setLoding(false);
    return;
  }
     setLoding(false);
     setError(null);
     navigate('/signin')  //navigate to signin.. 
} 
catch(error){
   setLoding(false);
   setError(error.message)
}


 
  };

  return (
    <div className="flex justify-center items-center h-screen" style={{ backgroundColor: 'rgb(90, 199, 90)' }}>
      <form className="w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 bg-white p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4 text-center text-green-500">Sign Up</h2>
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
          <button disabled = {loading} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline" type="submit">
           {loading ? 'loading...':'signup'}
          </button>
        </div>
        <p>
          Already have an account? Please{' '}
          <Link to="/signin">
            <span className="text-blue-700">...Signin</span>
          </Link>
        </p>
        {error && <p className='text-red-500 mt-5'>{error}</p>}
      </form>
    </div>
  );
}
