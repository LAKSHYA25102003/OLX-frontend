import React, { useContext, useState,useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Chip from '@mui/material/Chip';
// import Stack from '@mui/material/Stack';
// import DoneIcon from '@mui/icons-material/Done';
// import DeleteIcon from '@mui/icons-material/Delete';
import ItemContext from "../Context/item/ItemContext";
import './item.css'
function Item(props) {
  const { item,del } = props;
  const {deleteItem,likeItem}=useContext(ItemContext)
  const [isLiked,setLiked] = useState(false);
  
  const [imageUrl, setImageUrl] = useState(
    "http://localhost:5000/" + item.img_address
  );
  const getisLiked=async ()=>{
    const url=`http://localhost:5000/api/item/isLiked/${item._id}`
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': "application/json",
            'auth-token':localStorage.getItem('token') // yokrn
        }
    })
    if(response.status === 200){
      setLiked(true);
    }
    else if(response.status === 403){
      setLiked(false);
    }
    
  }

  useEffect(() => {
    getisLiked();
  }, []);
  
  // console.log(imageUrl)
  const onClickLikeHandler=()=>{
    likeItem(item._id)
    if(isLiked==true){
      setLiked(false);
    }
    else{
      setLiked(true);
    }
  }
  const onClickHandler=()=>{
    deleteItem(item._id)
  }
  return (
    <div class="card my-2">
      <img src={imageUrl} alt="Denim Jeans" style={{width:"100%",paddingTop:"5px"}} />
      
      <h2 class="price my-2">Rs. {item.price}</h2>
      <p>{item.description.slice(0,100)}...</p>
      <p><button ><Link to={`/description/${item._id}`} style={{color: "white"}}>Description</Link></button></p>
      {!del &&  <button className="my-2" onClick={onClickLikeHandler} variant="primary">
           {isLiked==true?"Dislike":"Like"}
         </button>}
         {del &&  <button className="my-2" onClick={onClickHandler} variant="primary">
           Delete
        </button>}
    </div>
  );
}

export default Item;


// <Card
//       className="mx-2 my-2"
//       style={{ padding: "5px", width: "18rem", border: "1px black solid" }}
//     >
//       <Card.Img
//         style={{ width: "100%", maxHeight: "200px" }}
//         variant="top"
//         src={imageUrl}
//       />
//       <Card.Body style={{ marginbottom: "0px" }}>
//         <Card.Title>Rs {item.price}</Card.Title>
//         <Card.Text>{item.description}</Card.Text>
//         <Button variant="primary">
//           <Link to={`/description/${item._id}`}>Description</Link>
//         </Button>
//         {!del &&  <Button className="mx-2" onClick={onClickLikeHandler} variant="primary">
//           Like
//         </Button>}
//         {del &&  <Button className="mx-2" onClick={onClickHandler} variant="primary">
//           Delete
//         </Button>}
        
//       </Card.Body>
//     </Card>