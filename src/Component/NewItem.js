import React, { useState } from "react";
import axios from 'axios'
import { Form,Button } from "react-bootstrap";
export default function NewItem() {
    const [itemData,setItemData]=useState({category:'',brand:'',description:'',price:'',buyingdate:''})
    const [image, setImage] = useState(null);
    let formData = new FormData();
    const submitHandler=(e)=>{
        e.preventDefault()
        formData.append('brand',itemData.brand);
        formData.append('description',itemData.description);
        formData.append('price',parseInt(itemData.price));
        formData.append('buyingDate',itemData.buyingdate );
        formData.append('Image',image );
        axios({
          method: "post",
          url: `http://localhost:5000/api/item/newItem/${itemData.category}`,
          data: formData,
          headers: { "Content-Type": "multipart/form-data", 'auth-token': localStorage.getItem('token') },
      })
          .then(function (response) {
              //handle success
              console.log(response.status);
              
          })
          .catch(function (response) {
              //handle error
              console.log(response.status);
          });
    }
    const onChangeHandler=(e)=>{
        e.preventDefault()
        setItemData({...itemData,[e.target.name]: e.target.value})
    }
    const imageHandler=(e)=>{
      setImage(e.target.files[0])
      // console.log(e.target.files);
    }
  return (
    <div className="container mt-4">
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" required>
          <Form.Label>Category </Form.Label>
          <Form.Control type="text" placeholder="category" value={itemData.category} name='category' onChange={onChangeHandler}/>
        </Form.Group>
        <Form.Group className="mb-3" required>
          <Form.Label>Brand</Form.Label>
          <Form.Control type="text" name='brand' value={itemData.Brand} placeholder="brand" onChange={onChangeHandler}/>
        </Form.Group>
        <Form.Group className="mb-3" required>
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" name='description' value={itemData.Description} placeholder="desctiption" onChange={onChangeHandler}/>
        </Form.Group>
        <Form.Group className="mb-3" required>
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" name='price' value={itemData.Price} placeholder="price in Rs" onChange={onChangeHandler}/>
        </Form.Group>
        <Form.Group className="mb-3" required>
          <Form.Label>Original Buying Data</Form.Label>
          <Form.Control type="date" name='buyingdate' value={itemData.OBD} placeholder="date" onChange={onChangeHandler}/>
        </Form.Group>
        <Form.Group className="mb-3" required>
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" name='image' onChange={imageHandler} placeholder="date" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
