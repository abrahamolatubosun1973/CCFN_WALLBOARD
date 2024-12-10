import React, { useState, useEffect } from "react";
import logo from "../Assets/ccfn_logo.png";
import prev from "../Assets/navigator/prev.png";
import next from "../Assets/navigator/next.png";
import play from "../Assets/navigator/play.png";
import pause from "../Assets/navigator/pause.png";
import { IoPlayCircleOutline, IoPlayForward } from "react-icons/io5";
import { GiPreviousButton, GiNextButton } from "react-icons/gi";

function EnuguWallboard() {
  const iframes = [
    "https://stateserver.org/public/dashboard/66a7a958-4181-4bb0-a0c2-6787a0094ac7", //Enugu Tx_new
    "https://stateserver.org/public/dashboard/e879de16-c666-49a3-9d37-1262c11b7107", //Tx_new by facilities
    "https://stateserver.org/public/dashboard/3059c611-4066-47e6-a3e9-c03e3964521e", //Tx_Cur
    "https://stateserver.org/public/dashboard/106bedd2-2a88-4a6d-baad-0dbd341a2051", //Tx_Continuity
    "https://stateserver.org/public/dashboard/360be1ec-69ea-4bfe-9687-cfe2a3808a3d", //Viral Load Cascade Suppression
    "https://stateserver.org/public/dashboard/4933d814-c817-4dc9-b4c1-285cffcb4fda", //Patient Viral Load Suppression
    "https://stateserver.org/public/dashboard/7f86380c-b4ed-4ed1-a9f9-244337a02e31", //IIT Rate
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
          CARITAS ENUGU - WALLBOARD
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
          className='iframe-hidden-footer iframe-footer-hidden h-screen border-none'></iframe>
      </div>
    </div>
  );
}

export default EnuguWallboard;
