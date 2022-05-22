import React from "react";
import Image from "next/image";
// import Link from "next/link";

export default class Masthead extends React.Component {
  render() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
         <video 
         autoPlay 
         loop 
         muted 
         playsInline 
         className="absolute w-full h-full object-cover">
          <source src="/assets/videobg.mp4" type="video/mp4;" />
         </video>
        <div className="flex flex-col items-center justify-center">
             <Image src="/assets/logo.png" width={90} height={90} alt="logo" />
         <div className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0.10)] text-center flex-1 flex items-center justify-center flex-col">
          <h1 className="mb-6 text-6xl xl:text-5xl">Rate Works</h1>
          <h2 className="mb-2 text-3xl xl:text3xl tracking-tight">
            <span>Communication,</span>{' '}<span>Simplified</span>
          </h2>
        <div className="flex flex-col gap-4 mt-16 px-10 text-3xl">
          <button type="submit" className=" text-white  hover:bg-zinc-600 outline-none border-2 border-white rounded-3xl px-8 py-2">Sign in</button>
          <button type="submit" className=" text-white  hover:bg-zinc-600 outline-none border-2 border-white rounded-3xl px-8 py-2">Sign up</button>
        </div>
        </div>
        </div>
      </div>
    );
}
}
