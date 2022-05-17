import React from "react";

export default class Masthead extends React.Component {
  render() {
    return (
      <section className={'flex flex-col bg-white text-center mx-auto px-11 mt-28 text-5xl md:text-4xl'}>
        <div className={'container mx-auto px-11'}>
        </div>
        <div className={'container mx-auto px-11 text-center mt-28'}>
       <h2>Broker landing page</h2>
       <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20">
         <button className=" bg-slate-300 hover:bg-slate-400 active:bg-slate-500 focus:outline-none focus:ring focus:ring-slate-700"> Rate 1</button>
         <button className=" bg-slate-300 hover:bg-slate-400 active:bg-slate-500 focus:outline-none focus:ring focus:ring-slate-700"> Rate 2</button>
         <button className=" bg-slate-300 hover:bg-slate-400 active:bg-slate-500 focus:outline-none focus:ring focus:ring-slate-700"> Rate 3</button>
         <button className=" bg-slate-300 hover:bg-slate-400 active:bg-slate-500 focus:outline-none focus:ring focus:ring-slate-700"> Rate 4</button>
         <button className=" bg-slate-300 hover:bg-slate-400 active:bg-slate-500 focus:outline-none focus:ring focus:ring-slate-700"> Rate 5</button>
         <button className=" bg-slate-300 hover:bg-slate-400 active:bg-slate-500 focus:outline-none focus:ring focus:ring-slate-700"> Rate 6</button>
         <button className=" bg-slate-300 hover:bg-slate-400 active:bg-slate-500 focus:outline-none focus:ring focus:ring-slate-700"> Rate 7</button>
         <button className=" bg-slate-300 hover:bg-slate-400 active:bg-slate-500 focus:outline-none focus:ring focus:ring-slate-700"> Rate 8</button>
         <button className=" bg-slate-300 hover:bg-slate-400 active:bg-slate-500 focus:outline-none focus:ring focus:ring-slate-700"> Rate 9</button>
         <button className=" bg-slate-300 hover:bg-slate-400 active:bg-slate-500 focus:outline-none focus:ring focus:ring-slate-700"> Rate 10</button>
         <button className=" bg-slate-300 hover:bg-slate-400 active:bg-slate-500 focus:outline-none focus:ring focus:ring-slate-700"> Rate 11</button>
         <button className=" bg-slate-300 hover:bg-slate-400 active:bg-slate-500 focus:outline-none focus:ring focus:ring-slate-700"> Rate 12</button>
        </div>
       </div>
       </section>
    );
  }
}