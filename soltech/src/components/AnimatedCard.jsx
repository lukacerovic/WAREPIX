import React from 'react';

const AnimatedCard = ({ src, title, textStyle, description, position, textContainerStyle }) => {
  const positionClasses = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
    center: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
  };

  return (
    <div className="relative w-full h-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 w-full h-full object-cover object-center"
      />
      <div
        className={`absolute ${positionClasses[position]} z-10 flex flex-col justify-between p-5 text-blue-50`}
      >
        <div
          className={`relative bg-gray-800 bg-opacity-10 backdrop-blur-md rounded-lg p-5 ${textContainerStyle}`}
        >
          <h1 className="bento-title special-font text-black">{title}</h1>
          <div className="flex h-[80%] flex-col justify-between mt-5 py-10">
            <div className="services-clip-path1 px-5 w-[100%] h-[25%] flex items-center px-3 shadow-2xl">
              <div className="w-[40%] h-[80%] flex items-center justify-center">
                <img src="img/laptopRemove.png" className="w-[90%]" />
              </div>
              <div className="h-full flex flex-col items-center justify-center">
                <h1 className="text-lg">Website Development</h1>
                <p className="text-sm text-center w-[80%]" >Building, optimizing, and maintaining websites and web applications</p>
              </div>
            </div>
            <div className="services-clip-path2 px-5 w-[100%] h-[25%] flex items-center px-3 shadow-2xl">
              <div className="w-[40%] h-[80%] flex items-center justify-center">
                <img src="img/mobileRemove2.png" className="w-[8.5vw]" />
              </div>
              <div className="h-full flex flex-col items-center justify-center">
                <h1 className="text-lg">Mobile Development</h1>
                <p className="text-sm text-center w-[80%]" >Creating seamless and responsive apps for iOS and Android.</p>
              </div>
            </div>
            <div className="services-clip-path3 px-5 w-[100%] h-[25%] flex items-center px-3 shadow-2xl">
              <div className="w-[40%] h-[80%] flex items-center justify-center">
                <img src="img/designMain.PNG" />
              </div>
              <div className="h-full flex flex-col items-center justify-center">
                <h1 className="text-lg">Content Development</h1>
                <p className="text-sm text-center w-[80%]" >3D animations, logo design, and UI/UX development, tailored to elevate your brand.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AnimatedCard;

  
