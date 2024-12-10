import React, { useState, useEffect } from "react";
import logo from "../Assets/ccfn_logo.png";
import prev from "../Assets/navigator/prev.png";
import next from "../Assets/navigator/next.png";
import play from "../Assets/navigator/play.png";
import pause from "../Assets/navigator/pause.png";
import { IoPlayCircleOutline, IoPlayForward } from "react-icons/io5";
import { GiPreviousButton, GiNextButton } from "react-icons/gi";

function AbiaWallboard() {
  const iframes = [
    "https://stateserver.org/public/dashboard/413fe613-5f47-4d75-a9e4-7e16bba79a69", //Abia Tx_New
    "https://stateserver.org/public/dashboard/04b037e5-18e3-4cef-a045-d7c6129dfb5e", //Abia TX_New by Facilities
    "https://stateserver.org/public/dashboard/6613aa4e-de85-46ce-802a-112d83f21451", //Abia Tx_cur
    "https://stateserver.org/public/dashboard/4e256658-6992-40fa-a285-8cc7922c6bb3", // Viral Load Cascade Suppression
    "https://stateserver.org/public/dashboard/21ebaab4-6cff-41e3-a2bc-cf04d30961d9", // Patient Viral Load Suppression
    "https://stateserver.org/public/dashboard/8f4c4fd0-42e7-48b6-b18d-9fe2602a6aee", // Treatment Continuity
    "https://stateserver.org/public/dashboard/881ed263-64c0-43d6-b3e7-aa948e1f4c9b", // IIT Rate
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
        <h1 className='text-red text-3xl font-bold'>
          CARITAS ABIA - WALLBOARD
        </h1>
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

export default AbiaWallboard;
