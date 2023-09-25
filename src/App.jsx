import React from 'react'

import { Footer, Header, Shop } from './containers'
import { Nav } from './components'
import './app.css'

const App = () => {
  return (
    <div className='App'>
        <div className='image_cover'>
          <Nav></Nav>
          <Header></Header>
        </div>
        <Shop></Shop>
        <Footer></Footer>
    </div>
  )
}

export default App