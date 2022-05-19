import React, { useContext, useRef } from "react";
// import Link from "next/link";
import AboutusText from '../styles/aboutus.module.css'
import { ScrollContext } from '../utils/scroll-observer' 

const OpacityForBlock = ({ sectionProgress, blockNo}) => {
  const progress = sectionProgress - blockNo
  if (progress >=0 && progress < 1) return 1
  return 0.2
}

export default class Aboutus extends React.Component {

  render(
    
  ) {
    const { scrollY } = useContext(ScrollContext)
    const refContainer = useRef<HTMLDivElement>(null)
    const numOfPages = 3
    let progress = 0
    const { current: elContainer } =refContainer
    if (elContainer) {
      const { clientHeight, OffsetTop } = elContainer
      const screenH = window.innerHeight
      const halfH = screenH / 2
      const percentY = Math.min(clientHeight + halfH,
        Math.max(-screenH, scrollY - OffsetTop) + halfH) / clientHeight
      progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages))

    return (
      <div ref={refContainer} className='bg-black text-white'>
        <div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold">
          <div className="leading-[1.15]">
            <div className={AboutusText} style={{
              opacity: OpacityForBlock (progress, 0)
            }}>About Us</div>
            <span className={`${AboutusText} inline-block after:content-['_']`} style={{
              opacity: OpacityForBlock (progress, 1)
            }}>We are breaking the communication barrier in the financial industry.
            </span>
            <span className={`${AboutusText} inline-block`}style={{
              opacity: OpacityForBlock (progress, 2)
            }}> Modernizing the way <strong>YOU</strong> do business. Creating transparency from end to end to ultimately provide the best client experience.
            </span>
          </div>
        </div>
      </div>
   

     );
   }
 }
}


