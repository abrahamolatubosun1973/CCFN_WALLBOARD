import React, { useState, useEffect } from "react";
import logo from "../Assets/ccfn_logo.png";
import prev from "../Assets/navigator/prev.png";
import next from "../Assets/navigator/next.png";
import play from "../Assets/navigator/play.png";
import pause from "../Assets/navigator/pause.png";
import { IoPlayCircleOutline, IoPlayForward } from "react-icons/io5";
import { GiPreviousButton, GiNextButton } from "react-icons/gi";

function ImoWallboard() {
  const iframes = [
    "https://stateserver.org/public/dashboard/f5acd277-82f9-4d41-a734-c2f83a00ed8f", //Imo Tx_new
    "https://stateserver.org/public/dashboard/61d12ea0-ef4d-46eb-b6d2-2921bb67d4be", //Tx_new by facilities
    "https://stateserver.org/public/dashboard/c193ade2-11ea-4ab4-a708-e10202219f1a", //Tx_cur
    "https://stateserver.org/public/dashboard/9c3d0693-d1ce-45ae-a07e-7bc659c4d29b", //Tx Continuity
    "https://stateserver.org/public/dashboard/82f859c3-6d09-443e-b185-0772f091f745", //Viral Load Cascade Suppression
    "https://stateserver.org/public/dashboard/aa8869c6-f146-4298-9e50-d51db262c1fa", //Patient Viral load Suppression
    "https://stateserver.org/public/dashboard/bce5a133-2ba0-4ef8-84ee-0e87406c5f48",//Interruption in treatment rate
  ];

  const [currentIframeIndex, setCurrentIframeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  //document.body.style.overflowY = "hidden";
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIframeIndex((prevIndex) => (prevIndex + 1) % iframes.length);
      }, 8000); // Scroll every 10 seconds
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
    <div className=' h-screen'>
      <nav className=' h-16 flex items-center justify-between px-2'>
        <div className='flex items-center'>
          <img src={logo} alt='Caritas Logo' className='w-16 h-16 mr-4 z-50' />
        </div>
        <h1 className='text-red text-3xl font-bold'>CARITAS IMO - WALLBOARD</h1>
        <div className='flex space-x-1'>
          <button onClick={handlePrevious}>
            {/*className='w-12 h-12 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 flex items-center justify-center transition'>
            <GiPreviousButton />⏮*/}
            <img
              src={prev} // Replace with your image path
              alt='Clickable Button'
              className='w-12 h-12 hover:opacity-80 transition-opacity'
            />
          </button>
          <button onClick={togglePlayPause}>
            {/*className='w-12 h-12 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 flex items-center justify-center font-bold transition'>
             <IoPlayCircleOutline /> */}
            {/* {isPlaying ? "Pause" : "Play"} */}
            {isPlaying ? (
              <img
                src={pause} // Replace with your image path
                alt='Clickable Button'
                className='w-12 h-12 hover:opacity-80 transition-opacity'
              />
            ) : (
              <img
                src={play} // Replace with your image path
                alt='Clickable Button'
                className='w-12 h-12 hover:opacity-80 transition-opacity'
              />
            )}
          </button>
          <button onClick={handleNext}>
            {/* className='w-12 h-12 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 flex items-center justify-center transition'>
           <GiNextButton />  ⏭*/}
            <img
              src={next} // Replace with your image path
              alt='Clickable Button'
              className='w-12 h-12 hover:opacity-80 transition-opacity'
            />
          </button>
        </div>
      </nav>
      <div className='bg-red-700 h-1'></div>
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

export default ImoWallboard;
