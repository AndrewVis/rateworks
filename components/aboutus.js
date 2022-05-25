import React from "react";
// import Link from "next/link";

export default class Aboutus extends React.Component {
  render() {
    return (
      <div className="bg-black text-white">
        <div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold">
          <div className="leading-[1.15]">
            <div className="py-10">About Us</div>
            <span>We are breaking the communication barrier in the financial industry.
            </span>
            <span> Modernizing the way <strong>YOU</strong> do business. Creating transparency from end to end to ultimately provide the best client experience.
            </span>
          </div>
        </div>
      </div>
   

    );
  }
}


