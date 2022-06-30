import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import {useParams} from 'react-router-dom'
import ItemContext from '../Context/item/ItemContext'
import './description.css'
export default function Description() {
    const {itembyID,fetchItembyID}=useContext(ItemContext)
    const [item,setItem]=useState({})
    const [ownerDetails,setOwnerDetails]=useState({})
    const params=useParams()
    const id=params.id
    const fetch=async()=>{
        await fetchItembyID(id)
        setItem(itembyID)
    }
    useEffect(()=>{
        fetch()
        setOwnerDetails(item.ownerDetails)
    },[])
    console.log(item.ownerDetails)
  return (
    <>
    <div id="carouselExampleControls" className="carousel slide container-3" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={`http://localhost:5000/${itembyID.img_address}`} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={`http://localhost:5000/${itembyID.img_address}`} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={`http://localhost:5000/${itembyID.img_address}`} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={`http://localhost:5000/${itembyID.img_address}`} className="d-block w-100" alt="..."/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-8">
          <div className="my-container">
            <h6>FEATURED</h6>
            <h2>{itembyID.category}</h2>
            <h4>{itembyID.brand}</h4>
            {/* <div className="row">
              <div className="col-4">Diesel</div>
              <div className="col-4">65000.0KM</div>
              <div className="col-4">MANUAL</div>
            </div> */}
          </div>
          <div className="my-container">
            <h2>Description</h2>
            <hr />
            <p>
            {itembyID.description}
            </p>
          </div>
        </div>
        <div className="col-4">
          <div className="my-container">
            <h1>Rs {itembyID.price}</h1>
            <button className="button-1">Make Offer</button>
          </div>
          <div className="my-container">
            <div>
              SOLD BY <br />
              {/* {item.ownerDetails.owner}
              {item.ownerDetails.contact}
              {item.ownerDetails.ownerEmail} */}
            </div>
            <div>
              Posted On:{itembyID.creation_date} <br />
              <a className="anchor" href="">View Seller Profile</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
