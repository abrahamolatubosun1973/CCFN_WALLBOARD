import React, { useState } from "react";

const Wallboard = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className='h-screen flex flex-col bg-gray-50'>
      {/* Header */}
      <header className='bg-red-500 text-white flex items-center justify-center py-4'>
        <img
          src='logo.png' // Replace this with the actual logo path
          alt='Logo'
          className='h-8 mr-2'
        />
        <h1 className='text-lg font-semibold tracking-wide'>
          CARITAS NIGERIA - WALLBOARD
        </h1>
      </header>

      {/* Content */}
      <div className='flex-grow flex flex-col items-center justify-center'>
        {/* "Not Found" Section */}
        <div className='text-center'>
          <div className='mb-4 text-gray-400'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='64'
              height='64'
              fill='currentColor'>
              <path d='M12 2L1 21h22L12 2zm0 3.17L19.57 19H4.43L12 5.17z' />
            </svg>
          </div>
          <p className='text-gray-500 text-lg font-medium'>Not found</p>
        </div>

        {/* Control Buttons */}
        <div className='flex items-center mt-6 gap-4'>
          <button
            className='w-12 h-12 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 flex items-center justify-center transition'
            onClick={() => console.log("Previous")}>
            ⏮
          </button>
          <button
            className='w-12 h-12 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 flex items-center justify-center font-bold transition'
            onClick={handlePlayPause}>
            {isPlaying ? "⏸" : "▶"}
          </button>
          <button
            className='w-12 h-12 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 flex items-center justify-center transition'
            onClick={() => console.log("Next")}>
            ⏭
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wallboard;
