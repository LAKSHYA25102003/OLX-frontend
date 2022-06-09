import React from 'react'
import ItemCollection from './ItemCollection';
import SubNavbar from './SubNavbar';

function Home() {
  return (
    <div  style={{ marginTop: "80px" }}>
      <SubNavbar />
      <div className='container '>
        <ItemCollection />
      </div>
    </div>
  )
}

export default Home
