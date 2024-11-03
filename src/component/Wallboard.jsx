import React, { useState, useEffect } from "react";
import logo from "../Assets/ccfn_logo.png";
import { IoPlayCircleOutline, IoPlayForward } from "react-icons/io5";
import { GiPreviousButton, GiNextButton } from "react-icons/gi";

function App() {
  const iframes = [
    "https://stateserver.org/public/dashboard/e4808490-b434-4907-affc-f05a7b412807",
    "https://stateserver.org/public/dashboard/3e79a600-62aa-439c-b808-50dd6534fded",
    "https://stateserver.org/public/dashboard/e365b981-3031-49a2-89be-1c0680104527",
  ];

  const [currentIframeIndex, setCurrentIframeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  //document.body.style.overflowY = "hidden";
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIframeIndex((prevIndex) => (prevIndex + 1) % iframes.length);
      }, 15000); // Scroll every 15 seconds
    }
    return () => clearInterval(interval);
  }, [isPlaying, iframes.length]);

  const handleNext = () => {
    setCurrentIframeIndex((currentIframeIndex + 1) % iframes.length);
  };

  const handlePrevious = () => {
    setCurrentIframeIndex(
      (currentIframeIndex - 1 + iframes.length) % iframes.length
    );
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className='bg-blue-200 h-screen'>
      <nav className='bg-red-400 h-16 flex items-center justify-between px-2'>
        <div className='flex items-center'>
          <img src={logo} alt='Caritas Logo' className='w-16 h-16 mr-4 z-50' />
        </div>
        <h1 className='text-white text-2xl font-bold'>
          CATHOLIC CARITAS FOUNDATION OF NIGER, ACCESS PROJECT WALLBOARD
        </h1>
        <div className='flex space-x-1'>
          <button
            onClick={handlePrevious}
            className='bg-blue-500 hover:bg-blue-300 text-gray-600 rounded shadow px-2 py-2 '>
            <GiPreviousButton />
          </button>
          <button
            onClick={togglePlayPause}
            className='bg-blue-500 hover:bg-blue-300 text-white font-bold rounded shadow py-2 w-20'>
            {/* <IoPlayCircleOutline /> */}
            {isPlaying ? "Pause" : "Play"}
          </button>
          <button
            onClick={handleNext}
            className='bg-blue-500 hover:bg-blue-300 text-gray-600 rounded px-2 py-2'>
            <GiNextButton />
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className='flex-grow relative bg-white shadow-lg rounded-lg overflow-hidden'>
        <iframe
          src={iframes[currentIframeIndex]}
          title='CARITAS Dashboard'
          frameBorder='1'
          width='100%'
          height='640'
          bordered='true'
          allowTransparency='true'
          className='h-screen'></iframe>
      </div>
    </div>
  );
}

export default App;
