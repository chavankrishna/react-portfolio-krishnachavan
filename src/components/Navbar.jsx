import React from 'react';
import logo from '../assets/krishnaLogo.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <nav className='mb-20 flex flex-wrap items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center '>
            <img className='mx-2 w-25 h-10' src={logo} alt="logo" />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a className='hover:text-sky-500 active:text-sky-600' href='https://www.linkedin.com/in/krishnachavan1/'>
          <FaLinkedin />
        </a>
        <a className='hover:text-cyan-400 active:text-cyan-600' href="https://github.com/chavankrishna">
          <FaGithub />
        </a>
        <a className='hover:text-rose-400 active:text-rose-500' href="https://www.instagram.com/_krishna.__21/">
          <FaInstagram />
        </a>
        <a className='hover:text-cyan-400 active:text-cyan-600' href="https://x.com/krishna18915181">
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;


