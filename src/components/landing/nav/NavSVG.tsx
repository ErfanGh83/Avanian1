import React from 'react'

export default function NavSVG() {
  return (
    <div className="absolute top-0 left-0 w-screen -z-10">
      <svg
        className="w-full h-60"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#42b9a2"
          fillOpacity="1"
          d="M0,128L48,128C96,128,192,128,288,112C384,96,480,64,576,90.7C672,117,768,203,864,229.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </svg>
    </div>
  );
}