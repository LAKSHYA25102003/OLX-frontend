import React, { useState } from "react";
import { Form, Button, Container } from 'react-bootstrap'
import { Link, useNavigate} from "react-router-dom";
// import { Card, Form, Button } from "react-bootstrap";
export default function Editprofile(props) {
  const [data, setData] = useState({ email: props.user[0].email, name: props.user[0].name, contact: props.user[0].contact, hostel: props.user[0].hostel })
  const [pass, setPass] = useState({ curr_pass: "", new_pass: "", conf_new_pass:"" });
  const [passwordChange, setPasswordChange] = useState(false);
  const navigate = useNavigate();

  const handleSaveChanges = async (name, hostel, contact) => {

    const url = `http://localhost:5000/api/auth/edit-details`
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': "application/json",
        'Accept': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ name, hostel, contact })
    })
    console.log(response.status);
    const json = await response.json()
    if (response.status === 200) {
      setData({ email: data.email, name: json[0].name, contact: json[0].contact, hostel: json[0].hostel })
      props.showAlert("success", "Changes Saved successfully", 3000);
    }
    else if (response.status === 403) {
      setData({ email: data.email, name: props.user[0].name, contact: props.user[0].contact, hostel: data.hostel })
      props.showAlert("danger", "Phone Number Already Exists", 5000);
    }
  }


  const handlePassChanges = async (curr,newp,confp) => {

    const url = `http://localhost:5000/api/item/change_password`
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': "application/json",
        'Accept': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ password:curr, new_password:newp, confirm_password:confp })
    })
    console.log(response.status);
    const json = await response.json()
    if (response.status === 200) {
      setPass({ curr_pass: "", new_pass: "", conf_new_pass:"" })
      props.showAlert("success", "Changes Saved successfully", 3000);
    }
    else if (response.status === 403) {
      setPass({ curr_pass: "", new_pass: "", conf_new_pass:"" })
      props.showAlert("danger", "Password Entered Is Incorrect.", 5000);
    }
    else if(response.status === 401){
      
      props.showAlert("danger", "Password Not Matched with Confirm Password.", 5000);
    }
  }


  const onChangeHandler = (e) => {
    e.preventDefault()
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const onChangePassHandler = (e) => {
    e.preventDefault()
    setPass({ ...pass, [e.target.name]: e.target.value })
  }

  if (!passwordChange) {
    return (
      <Container>
        <div class="container-xl px-4 mt-4">
          <div class="row">
            <div class="col-xl-4">
              <div class="card mb-4 mb-xl-0">
                <div class="card-header">Profile Picture</div>
                <div class="card-body text-center">
                  <img class="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                  <div class="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                  <button class="btn btn-primary" type="button">Upload new image</button>
                </div>
              </div>
            </div>
            <div class="col-xl-8">
              <div class="card mb-4">
                <div class="card-header">Account Details</div>
                <div class="card-body">
                  <form>

                    <div class="row gx-3 mb-3">
                      <div class="col-md-6">
                        <label class="small mb-1" for="inputFirstName">First name</label>
                        <input class="form-control" name="name" id="inputFirstName" type="text" placeholder="Enter your first name" value={data.name} onChange={onChangeHandler} />
                      </div>
                      <div class="col-md-6">
                        <label class="small mb-1" for="inputEmailAddress">Email address</label>
                        <input class="form-control" name="email" id="inputEmailAddress" type="email" placeholder="Enter your email address" value={data.email} disabled />
                      </div>

                    </div>
                    <div class="row gx-3 mb-3">
                      <div class="col-md-6">
                        <label class="small mb-1" for="inputPhone">Phone number</label>
                        <input class="form-control" name="contact" id="inputPhone" type="tel" placeholder="Enter your phone number" value={`${data.contact}`} onChange={onChangeHandler} />
                      </div>
                      <div class="col-md-6">
                        <Form.Group className="mb-3">
                          <Form.Label>Hostel</Form.Label>
                          <Form.Select name='hostel' value={data.hostel} onChange={onChangeHandler}>
                            <option>Choose</option>
                            <option>Barak</option>
                            <option>Brahmaputra</option>
                            <option>Dhanisri</option>
                            <option>DIBANG</option>
                            <option>Dihing</option>
                            <option>DISANG</option>
                            <option>KAMENG</option>
                            <option>Kapili</option>
                            <option>Lohit</option>
                            <option>Kameng</option>
                            <option>Manas</option>
                            <option>Siang</option>
                            <option>Subansiri</option>
                          </Form.Select>
                        </Form.Group>
                      </div>

                    </div>
                    <button class="btn btn-primary my-1" type="button" disabled={data.contact.length == 10 ? false : true} onClick={() => handleSaveChanges(data.name, data.hostel, data.contact)}>Save Changes</button>
                    <button class="btn btn-primary my-3" type="button" onClick={() => setPasswordChange(true)}>Change Password</button>
                    <button class="btn btn-primary" type="button" >Cancel</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
  )}
  else{
    return (
      <Container>
        <div class="container-xl px-4 mt-4">
          <div class="row">
            <div class="col-xl-4">
              <div class="card mb-4 mb-xl-0">
                <div class="card-header">Profile Picture</div>
                <div class="card-body text-center">
                  <img class="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                  <div class="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                  <button class="btn btn-primary" type="button">Upload new image</button>
                </div>
              </div>
            </div>
            <div class="col-xl-8">
              <div class="card mb-4">
                <div class="card-header">Change Passowrd</div>
                <div class="card-body">
                  <form>
  
                    <div class="row gx-3 mb-3">
                      <div class="col-md-6">
                        <label class="small mb-1" for="inputFirstName">Current Password</label>
                        <input class="form-control" name="curr_pass" id="inputFirstName" type="text" placeholder="Enter your current password" value={pass.curr_pass} onChange={onChangePassHandler} />
                      </div>
                    </div>
                    <div class="row gx-3 mb-3">
                      <div class="col-md-6">
                        <label class="small mb-1" for="inputFirstName">New Password</label>
                        <input class="form-control" name="new_pass" id="inputFirstName" type="password" placeholder="Enter your new password." value={pass.new_pass} onChange={onChangePassHandler} />
                      </div>
                      <div class="col-md-6">
                        <label class="small mb-1" for="inputFirstName">Confirm Password</label>
                        <input class="form-control" name="conf_new_pass" id="inputFirstName" type="text" placeholder="Enter password again." value={pass.conf_new_pass} onChange={onChangePassHandler} />
                      </div>
                    </div>
                    {/* <button class="btn btn-primary my-1" type="button" disabled={data.contact.length == 10 ? false : true} onClick={() => handleSaveChanges(data.name, data.hostel, data.contact)}>Save Changes</button> */}
                    <button class="btn btn-primary my-2" type="button" disabled={pass.new_pass === pass.conf_new_pass && pass.new_pass!==""?false:true} onClick={() => handlePassChanges(pass.curr_pass,pass.new_pass,pass.conf_new_pass)}>Confirm</button>
                    <button class="btn btn-primary" type="button" onClick={()=>setPasswordChange(false)}>Cancel</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
  )}
}
