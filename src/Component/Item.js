import React, { useContext, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Chip from '@mui/material/Chip';
// import Stack from '@mui/material/Stack';
// import DoneIcon from '@mui/icons-material/Done';
// import DeleteIcon from '@mui/icons-material/Delete';
import ItemContext from "../Context/item/ItemContext";
function Item(props) {
  const { item,del } = props;
  const {deleteItem,likeItem}=useContext(ItemContext)
  const [imageUrl, setImageUrl] = useState(
    "http://localhost:5000/" + item.img_address
  );
  // console.log(imageUrl)
  const onClickLikeHandler=()=>{
    likeItem(item._id)
  }
  const onClickHandler=()=>{
    deleteItem(item._id)
  }
  return (
    <Card
      className="mx-2 my-2"
      style={{ padding: "5px", width: "18rem", border: "1px black solid" }}
    >
      <Card.Img
        style={{ width: "100%", maxHeight: "200px" }}
        variant="top"
        src={imageUrl}
      />
      <Card.Body style={{ marginbottom: "0px" }}>
        <Card.Title>Rs {item.price}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Button variant="primary">
          <Link to={`/description/${item._id}`}>Description</Link>
        </Button>
        {!del &&  <Button className="mx-2" onClick={onClickLikeHandler} variant="primary">
          Like
        </Button>}
        {del &&  <Button className="mx-2" onClick={onClickHandler} variant="primary">
          Delete
        </Button>}
        
      </Card.Body>
    </Card>
  );
}

export default Item;
