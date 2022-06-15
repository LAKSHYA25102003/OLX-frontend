import React from 'react'
import ItemCollection from './ItemCollection';
import Modal from './Modal';



function Home() {
  return (
    <div style={{ marginTop: "40px" }}>
      <div className='container '>
        <Modal/>
        <ItemCollection />
      </div>

    </div>
  )
}

export default Home
