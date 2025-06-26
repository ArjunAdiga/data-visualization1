import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HamburgerIcon } from '../assets/Assets';



const NavBar: React.FC = () => {
    const navigate = useNavigate();
  return (
    <nav  style={{paddingLeft:"16px",paddingRight:"20px"}}>
      <div className="flex items-center justify-between">   
        <div className="flex items-center space-x-8">     
          <button className="text-gray-400 hover:text-white">
            <HamburgerIcon /> {/* can add onclick to open the sidebar with names*/}
          </button>

          <div className="flex items-center space-x-1">
            <button className="bg-[#2C2E334D] text-white px-3 py-1.5 rounded-md text-sm font-medium" onClick={() => navigate("/")} style={{border:"1px solid #5A5A5A",borderRadius:"4px"}}>
              Charging Stations
            </button>
            <button className="text-gray-400 hover:text-white px-3 py-1.5 rounded-md text-sm font-medium"onClick={() => navigate("/")}>
              Fleet Sizing
            </button>
            <button className="text-gray-400 hover:text-white px-3 py-1.5 rounded-md text-sm font-medium"onClick={() => navigate("/")}>
              Parking
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none w-10%">
            <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-800 text-white placeholder-gray-400 pl-10 pr-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-gray-700 w-64"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;