import React from 'react'
import './footer.css'

import bc_badge from '../../assets/bc_badge.svg'

const Footer = () => {
  return (
    <footer className='footer_container'>
        <div className='socials'>
          <a href='/'><img src={bc_badge} /></a>
          <i className="fa-brands fa-twitter fa-sm"></i> 
          <i className="fa-brands fa-facebook fa-sm"></i>
        </div>
        <div className='footer_links'>
          <a href="">Home</a>
          <a href="">Contact</a>
          <a href="">Back to site</a>
        </div>
    </footer>
  )
}

export default Footer