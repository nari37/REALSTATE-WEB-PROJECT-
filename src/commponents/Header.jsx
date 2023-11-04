import React from 'react'
import {FaSearch} from 'react-icons/fa';
import '../Css/Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <h1 className='font-bold text-sm sm:text-xl '>
            <span className='text-green-500'>Vizag</span>
            <span className='text-slate-700'>Estate</span>
        </h1>
        <from className = 'bg-slate-100 p-2 rounded-lg flex items-center'>
            <input type='text' placeholder='Search....' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
            <FaSearch className= 'text-slate-500'/>
        </from>
        <ul className='flex gap-4'>
           <Link to='/'> <li className='sm:inline text-green-500 hover:underline cursor-pointer'>Home</li></Link>
           <Link to='/about'> <li className='sm:inline text-green-500 hover:underline cursor-pointer'>About</li></Link>
           <Link to = '/Signin'> <li className='sm:inline text-green-500 hover:underline cursor-pointer' id='sign'>Sign in</li></Link>
            
        </ul>
        </div>
    </header>
  )
}
