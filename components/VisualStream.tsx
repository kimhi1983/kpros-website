import React from 'react';

const VisualStream: React.FC = () => {
  return (
    <section className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] relative bg-slate-900 overflow-hidden">
      <div className="w-full h-full overflow-hidden">
         <iframe 
           src='https://my.spline.design/claritystream-5oBaBYTTUXSbpihiuguIOYqa/' 
           frameBorder='0' 
           width='100%' 
           height='100%'
           loading="lazy"
           className="w-full h-[150%] -translate-y-[15%] pointer-events-none sm:pointer-events-auto"
           title="Clarity Stream"
           aria-hidden="true"
         ></iframe>
      </div>
      
      <div className="absolute inset-0 z-10 bg-transparent"></div>
    </section>
  );
};

export default VisualStream;
