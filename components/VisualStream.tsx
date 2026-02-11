import React from 'react';

const VisualStream: React.FC = () => {
  return (
    <section className="w-full h-[40vh] md:h-[60vh] relative bg-slate-900 overflow-hidden">
      {/* 3D Iframe */}
      <div className="w-full h-full overflow-hidden">
        <iframe
          src='https://my.spline.design/claritystream-5oBaBYTTUXSbpihiuguIOYqa/'
          frameBorder='0'
          width='100%'
          height='100%'
          className="w-full h-[150%] -translate-y-[15%]" // Aggressive crop: Height 150%, shift up 15%. Bottom extends ~27% past container.
          title="Clarity Stream"
        ></iframe>
      </div>

      {/* Transparent overlay to prevent scroll trapping within the iframe */}
      <div className="absolute inset-0 z-10 bg-transparent"></div>
    </section>
  );
};

export default VisualStream;