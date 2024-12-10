import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AbiaWallboard from "./component/AbiaWallboard";
import CaritasWallboard from "./component/Caritas";
import EnuguWallboard from "./component/EnuguWallboard";
import ImoWallboard from "./component/ImoWallboard";

function App() {
  return (
    <Router>
      <div className='h-screen flex flex-col'>
        <Routes>
          {/* Define Routes for each organization */}
          <Route path='/abia' element={<AbiaWallboard />} />
          <Route path='/caritas' element={<CaritasWallboard />} />
          <Route path='/enugu' element={<EnuguWallboard />} />
          <Route path='/imo' element={<ImoWallboard />} />
          <Route
            path='*'
            element={
              <div className='text-center text-red-500'>
                404: Page Not Found
              </div>
            }
          />
        </Routes>
        {/* Footer */}
        <footer className='text-center font-light text-sm w-full mt-auto'>
          Caritas Foundation of Nigeria (c) 2024
        </footer>
      </div>
    </Router>
  );
}

export default App;
