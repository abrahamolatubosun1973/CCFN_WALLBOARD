import React, { useState, useEffect } from "react";
import logo from "../Assets/ccfn_logo.png";
import prev from "../Assets/navigator/prev.png";
import next from "../Assets/navigator/next.png";
import play from "../Assets/navigator/play.png";
import pause from "../Assets/navigator/pause.png";
import { IoPlayCircleOutline, IoPlayForward } from "react-icons/io5";
import { GiPreviousButton, GiNextButton } from "react-icons/gi";

function Caritas() {
  const iframes = [
    "https://stateserver.org/public/dashboard/1efdf9d3-64b5-4dfd-b36f-97b23b5f1245",
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
          CARITAS NIGERIA HQ - WALLBOARD
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

export default Caritas;
