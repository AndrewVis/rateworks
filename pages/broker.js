import React, { useEffect } from "react";
import Image from "next/image";
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
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
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
    <a href={props.id} className="group">
      <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
        <img alt=""
        src={props.item.ImageSrc}
        layout="fill"
        objectFit="cover"
        className={(
        "group-hover:opacity-75 duration-700 ease-in-out"
    
        )}
      />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{props.item.Company}</h3>
      <p className="mt-1 text-lg font-medium text-gray-700">{props.item.Rate}</p>
    </a>
  )
}