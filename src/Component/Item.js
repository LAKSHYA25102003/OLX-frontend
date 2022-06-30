import React,{useState} from 'react'
import {Card,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Item(props) {
    const { item } = props;
    const [imageUrl,setImageUrl]=useState('http://localhost:5000/'+item.img_address)
    // console.log(imageUrl)
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img style={{width:"100%",maxHeight:"200px"}} variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>Rs {item.price}</Card.Title>
          <Card.Text>
            {item.description}
          </Card.Text>
          <Button variant="primary"><Link to={`/description/${item._id}`}>Description</Link></Button>
        </Card.Body>
      </Card>
    )
}

export default Item
