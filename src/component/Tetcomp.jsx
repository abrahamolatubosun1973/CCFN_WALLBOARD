import React, { useState, useRef } from "react";
import logo from "../Assets/ccfn_logo.png";

const Tetcomp = () =>
{
    const iframes = [
      "https://stateserver.org/public/dashboard/fd51f3ef-5ae7-494d-a3a5-9f5607089c34",
      "https://stateserver.org/public/dashboard/example-url-2",
      "https://stateserver.org/public/dashboard/example-url-3",
    ];

    const [isPlaying, setIsPlaying] = useState(false);
    const iframeRef = useRef(null);

    const handlePlayPause = () => {
      const iframe = iframeRef.current;
      if (iframe) {
        if (isPlaying) {
          iframe.contentWindow.postMessage("pause", "*");
          setIsPlaying(false);
        } else {
          iframe.contentWindow.postMessage("play", "*");
          setIsPlaying(true);
        }
      }
    };

    const handlePreviousFrame = () => {
      const iframe = iframeRef.current;
      if (iframe) {
        iframe.contentWindow.postMessage("previousFrame", "*");
      }
    };

    const handleNextFrame = () => {
      const iframe = iframeRef.current;
      if (iframe) {
        iframe.contentWindow.postMessage("nextFrame", "*");
      }
    };
  return (
    <div className='bg-blue-200 h-screen'>
      <header className='bg-red-500 h-16 flex items-center px-8'>
            <div className='flex items-center'>
            <img src={logo} alt='Caritas Logo' className='w-12 h-12 mr-4' />
            <h1 className='text-white text-2xl font-bold'>CARITAS WALLBOARD</h1>
            </div>
            <div className='flex space-x-4'>
            <button
                onClick={handlePreviousFrame}
                className='bg-white text-red-500 px-4 py-2 rounded-md'>
                Previous
            </button>
            <button
                onClick={handlePlayPause}
                className='bg-white text-red-500 px-4 py-2 rounded-md'>
                {isPlaying ? "Pause" : "Play"}
            </button>
            <button
                onClick={handleNextFrame}
                className='bg-white text-red-500 px-4 py-2 rounded-md'>
                Next
            </button>
            </div>
      </header>

      <main className='p-8'>
        {/* Content goes here */}
        <iframe
          ref={iframeRef}
          src='https://example.com/your-iframe-src' // Replace with the actual iframe source
          title='Iframe Title'
          width='100%'
          height='500px'
          frameBorder='0'
          allowFullScreen
        />
      </main>
    </div>
  );
};

export default Tetcomp;
