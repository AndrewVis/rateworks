import React, { useEffect } from "react";
// import Image from "next/image";
import { useState } from 'react';
import { createClient } from "@supabase/supabase-js";
import { async } from "postcss-js";
import { data } from "browserslist";


export async function getStaticProps() {
const supabaseAdmin = createClient (
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
)
const { data } = await supabaseAdmin
.from('Rates')
.select('*')
.order('id');
console.log(data)
return {
  props: {
    data: data,
  },
  }
}



export default function Broker ({data}){
   
    return (
      <div className="bg-neutral-900 max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        {/* <h1 className="mb-2 text-3xl xl:text-3xl p-8 font-bold z-10 text-neutral-300 drop-shadow-[0_5px_3px_rgba(0,0,0.10)] text-center flex-1 flex items-center justify-center flex-col">5 Year Mortgage Rates</h1> */}
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {data.length >0 && data.map(item =><BlurImage item = {item}/>)}
        </div>
      </div>
    );
  }


function BlurImage (props) {
  const [isLoading, setLoading] = useState(true)
  console.log(props)
  return (
    <a href={props.item.id} className="group">
      <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
        <img alt=""
        src={props.item.ImageSrc}
        layout="fill"
        objectFit="cover"
        onclick=""
        className={(
        "group-hover:opacity-75 duration-700 ease-in-out"
    
        )}
      />
      </div>
      <h3 className="mt-4 text-lg text-neutral-300 border-2 text-center border-white rounded-2xl">{props.item.Company}</h3>
      <p className="mt-1 text-lg font-medium text-neutral-300 text-center border-2 border-white rounded-3xl">{props.item.Rate}</p>
    </a>
  )
}