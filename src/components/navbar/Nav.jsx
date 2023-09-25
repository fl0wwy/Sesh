import React, { useEffect, useState } from 'react'
import './nav.css'

import sesh_skull from '../../assets/seshskull_site.png'

const Nav = () => {
  const [item, setItems] = useState(0)
  const [price, setPrice] = useState("0.00")
  const [scrolling, setScrolling] = useState(false)

  function vhToPixels(vh) {
    // Get the current viewport height
    const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    
    // Calculate the pixels equivalent of the vh value
    const pixels = (vh * viewportHeight) / 100;
    
    return pixels;
  }
  
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > vhToPixels(100)) {
        setScrolling(true)
      }
      else{
        setScrolling(false)
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={`nav_container ${scrolling ? "scrolled" : ""}`}>
      <a href="/index.html"><img className='nav_img' src={sesh_skull} alt="skull_logo" /></a>
      <div className='links'>
        <a href="">Products</a>
        <a href="">Team</a>
      </div>
      <div className='shop'> 
        <div className='search_container'><i class="fa-solid fa-magnifying-glass fa-sm"></i></div>
        <div className='cart'>
          <a href='/'><i class="fa-solid fa-cart-shopping fa-sm"></i> { item } / ${ price }</a>
        </div>
      </div>

    </div>
  )
}

export default Nav