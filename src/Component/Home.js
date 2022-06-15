import React from 'react'
import ItemCollection from './ItemCollection';
import SubNavbar from './SubNavbar';
import Modal from './Modal';



function Home() {
  return (
    <div style={{ marginTop: "80px" }}>
      <SubNavbar />
      <div className='container '>
        <Modal/>
        <ItemCollection />
      </div>

    </div>
  )
}

export default Home
