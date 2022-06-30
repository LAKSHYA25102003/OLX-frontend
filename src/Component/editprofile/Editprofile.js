import React, { useState } from "react";
import { Form,Button,Container } from 'react-bootstrap'
import { Link } from "react-router-dom";
export default function Editprofile(props) {
    const [data,setData]=useState({email:props.user[0].email,name:props.user[0].name,contact:props.user[0].contact})
    
    const onChangeHandler=(e)=>{
        e.preventDefault()
        setData({...data,[e.target.name]:e.target.value})
    }
  return (
    <Container>
    <Form>
      <Form.Group className="mb-3 my-3" controlId="formBasicEmail">
        <Form.Label  >Email address</Form.Label>
        <Form.Control name='email' value={data.email} disabled readOnly type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder="name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label>Contact No.</Form.Label>
        <Form.Control name='contact' onChange={onChangeHandler} value={data.contact} type="text" placeholder="Contact no." />
      </Form.Group>
      <Button variant="primary" type="submit">
        Save Changes
      </Button>
      <Button className="mx-2" variant="primary" type="submit">
        <Link to="/">Cancel</Link>
      </Button>
    </Form>
    </Container>
  );
}
