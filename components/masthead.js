import React from "react";

export default class Masthead extends React.Component {
  render() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
          <source src="" />
        </video>
        <div className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0.10)] text-center flex-1 flex items-center justify-center flex-col">
          <h1 className="mb-6 text-4xl xl:text-5xl">Rate Works</h1>
          <h2 className="mb-2 text-2xl xl:text3xl tracking-tight">
            <span>Communication,</span>{' '}<span>Simplified</span>
          </h2>
        </div>
      </div>
    );
}
}
