import React, { useRef, useContext } from 'react';
import { ScrollContext } from '../utils/scroll-observer'
import MyApp from '../pages/_app';

export default class Masthead extends React.Component {


    render(
    ){
      const refContainer = useRef<HTMLDivElement>(null)
      const { scrollY } = useContext(ScrollContext)
  
      let progress = 0
  
      const { current: elContainer} = refContainer
      if (elContainer) {
        progress = Math.min(1, scrollY / elContainer.clientHeight)
      
    return (
      <div ref={refContainer} className="min-h-screen flex flex-col items-center justify-center sticky top-0 -z-10"
         style={{
           transform:`translateY(-${progress * 20}vh)`
         }}      
      >
         <video 
         autoPlay 
         loop 
         muted 
         playsInline 
         className="absolute w-full h-full object-cover">
          <source src="/assets/bg-video.mp4" type="video/mp4;" />
         </video>
        <div className="flex flex-col items-center justify-center">
             <Image src="/assets/logo.png" width={115} height={115} alt="logo" />
         <div className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0.10)] text-center flex-1 flex items-center justify-center flex-col">
          <h1 className="mb-6 text-6xl xl:text-5xl">Rate Works</h1>
          <h2 className="mb-2 text-3xl xl:text3xl tracking-tight">
            <span>Communication,</span>{' '}<span>Simplified</span>
          </h2>
        </div> 
      </div>
      </div>
    );
}
}
}

