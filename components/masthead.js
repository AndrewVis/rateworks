import React from "react";
import Image from "next/image";
import Link from "next/link";

export default class Masthead extends React.Component {
  render() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
         <div className="flex flex-col items-center justify-center">
          <Image 
          src="/assets/background3.jpg" 
          alt="background" 
          width={2000} height={3000} 
          className="bg-cover object-cover width-full height-full" />
 

         </div>
        <div className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0.10)] text-center flex-1 flex items-center justify-center flex-col">
          <h1 className="mb-6 text-4xl xl:text-5xl">Rate Works</h1>
          <h2 className="mb-2 text-2xl xl:text3xl tracking-tight">
            <span>Communication,</span>{' '}<span>Simplified</span>
            <Link href="/broker">
              <a>Go to broker page</a>
            </Link>
          </h2>
        </div>
         <div className="colour:black flex-grow-0 pb-20 md:pb-10 transition-all duration-1000">
           <Image src="/assets/drop-down-arrow.png" 
           width={188 / 3 } 
           height={105 / 3 } 
           alt="scroll down" />
         </div>
      </div>
    );
}
}
