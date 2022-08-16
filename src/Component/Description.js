import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Button, Container } from 'react-bootstrap'
import ItemContext from '../Context/item/ItemContext'
import AuthContext from '../Context/authentication/AuthContext'
import { useNavigate } from 'react-router-dom'
import './description.css'
export default function Description(props) {

  const navigate=useNavigate();
  const { itembyID } = props;
  const context = useContext(AuthContext);
  const { loggedInuser, fetchuser } = context;

  useEffect(()=>{
    fetchuser();
  },[loggedInuser.length,loggedInuser])

  const chatbuttonHandler = async (e) => {
    e.preventDefault();
    const data = {
      sender: loggedInuser[0]._id,
      reciever: itembyID[0].ownerDetails.ownerId,
      itemId: itembyID[0]._id,
    }
    const url = "http://localhost:5000/api/conversation";
    let response = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
      },

      body:JSON.stringify(data)
    })
    response=await response.json()
    if(response.success==true)
    {
      // console.log("res= ",response);
      navigate("/messanger/"+response.conversation._id);
    }
  }
  return (loggedInuser.length!==0)&&(
    <>
      <Container>
        <Card style={{ alignItems: "center" }} className="my-3">
          <Card.Img variant="top" style={{ width: "175%", height: "auto", "border-radius": "25px" }} src={`http://localhost:5000/${itembyID[0].img_address}`} />
        </Card>
        <div className='row my-4'>
          <Card style={{ width: "75%", height: "auto", "border-radius": "25px" }}>
            <Card.Header as="h3">{itembyID[0].category}</Card.Header>
            <Card.Body>
              <Card.Title><h3>{itembyID[0].brand}</h3></Card.Title>
              <Card.Text>
                {itembyID[0].description}
              </Card.Text>
              <Card.Text>
                Original Buying Date:- {itembyID[0].originalBuyingDate}
              </Card.Text>
              <Card.Text>
                Posted on:- {itembyID[0].creation_date}
              </Card.Text>
              <Button variant="primary">Rs {itembyID[0].price}</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "75%", height: "auto", "border-radius": "25px" }}>
            <Card.Header as="h5">Seller Details</Card.Header>
            <Card.Body>
              <Card.Title><h2>{itembyID[0].ownerDetails.owner}</h2></Card.Title>
              <Card.Text>
                Email: {itembyID[0].ownerDetails.ownerEmail}
              </Card.Text>
              <Card.Text>
                Contact :- {itembyID[0].ownerDetails.contact}
              </Card.Text>
              <Card.Text>
                Hostel :- {itembyID[0].ownerDetails.hostel}
              </Card.Text>
              {
                (itembyID[0].ownerDetails.ownerId!==loggedInuser[0]._id)&&<button className="Text" onClick={chatbuttonHandler}>Chat with seller</button>
              }
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  )
}
