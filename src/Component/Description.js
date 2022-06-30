import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import {useParams} from 'react-router-dom'
import { Card,Button,Container} from 'react-bootstrap'
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
    <Container>
    <Card style={{alignItems:"center"}}>
  <Card.Img variant="top" style={{width:"400px"}} src={`http://localhost:5000/${itembyID.img_address}`} />

    </Card>
    <Card >
  <Card.Header as="h5">{itembyID.category}</Card.Header>
  <Card.Body style={{marginRight:""}}>
    <Card.Title>{itembyID.brand}</Card.Title>
    <Card.Text>
      {itembyID.description}
    </Card.Text>
    <Card.Text>
      Posted on:- {itembyID.creation_date}
    </Card.Text>
    <Card.Text>
      Rs {itembyID.price}
    </Card.Text>    
    <Button variant="primary">Seller Details</Button>
  </Card.Body>
</Card>
</Container>
    </>
  )
}
