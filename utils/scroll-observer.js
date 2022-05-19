import React, { useCallback, useEffect, useState } from 'react'
import MyApp from '../pages/_app'


// interface ScrollValue {
//   scrollY: number
// }

export default class ScrollContext extends React.Component({
scrollY: 0
})
{}

const scrollObserver = ({children}) => {
  const [scrollY, setScrollY] = useState(0) 
  const handlesScroll = useCallback(() => {
    setScrollY(window.scrollY)
  }, [])

  useEffect (() => {
    document.addEventListener('scroll', handlesScroll, {passive:
      true})
      return () => document.removeEventListener('scroll', handlesScroll)
  }, [handlesScroll])

  return (
    <ScrollContext.Provider value={{scrollY}}>
      {children}
    </ScrollContext.Provider>

  )
}


