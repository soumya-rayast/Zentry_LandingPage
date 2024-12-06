import React from 'react';
import AnimatedTitle from './AnimatedTitle';

const links = [
  { href: 'https://discord.com', name: 'Discord' },
  { href: 'https://twitter.com', name: 'Twitter' },
  { href: 'https://youtube.com', name: 'Youtube' },
];

const Footer = () => {
  return (
    <div className='w-screen bg-violet-300 py-4 px-10 text-black'>
      <AnimatedTitle
        title="zentr<b>y</b>"
        containerClass="mt-10 !text-black text-center mb-20 "
      />
      <div className='flex flex-col gap-8 md:flex-row justify-between items-start mb-20 md:mb-32 mt-10'>
        <div className='flex flex-col uppercase text-xl'>
          <h1 className='text-xs mb-2'>Explore</h1>
          <a href="#">Home</a>
          <a href="#">Prologue</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div className='flex flex-col uppercase text-xl'>
          <h1 className='text-xs mb-2'>Products</h1>
          <a href="#">Radiant</a>
          <a href="#">Nexus</a>
          <a href="#">Zigma</a>
          <a href="#">Azul</a>
        </div>
        <div className='flex flex-col uppercase text-xl'>
          <h1 className='text-xs mb-2'>Follow us</h1>
          {links.map((link, index) => (
            <a href={link.href} key={index} className='flex items-center gap-2'>
              {link.name}
            </a>
          ))}
          <a href="#">Medium</a>
        </div>
        <div className='flex flex-col uppercase text-xl'>
          <h1 className='text-xs mb-2'>Resources</h1>
          <a href="#">Media Kit</a>
        </div>
      </div>
      <div className='container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row'>
        <p className='text-center text-xs md:text-left uppercase'>
          &copy; Sam 2024. All rights reserved
        </p>
        <a href="#privacy-policy" className='text-center text-xs hover:underline md:text-right'>
          Privacy Policy
        </a>
      </div>
    </div>
  );
};

export default Footer;
