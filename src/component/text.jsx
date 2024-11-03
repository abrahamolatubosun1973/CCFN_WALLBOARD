import React from 'react'
import logo from "../Assets/ccfn_logo.png";

const text = () => {
  return (
    <div className='bg-blue-200 h-screen'>
      <header className='bg-red-500 h-16 flex items-center px-8'>
        <div className='flex items-center'>
          <img src={logo} alt='Caritas Logo' className='w-12 h-12 mr-4' />
          <h1 className='text-white text-2xl font-bold'>CARITAS WALLBOARD</h1>
        </div>
      </header>

      <main className='p-8'>
        {/* Content goes here */}
        <p>This is the content area.</p>
      </main>
    </div>
  );
}

export default text