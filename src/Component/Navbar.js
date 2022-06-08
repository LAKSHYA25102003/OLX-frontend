import React from 'react'
// to load image in react use img src={require('/images/image-name.png')}
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light py-3" style={{ boxShadow: "2px 2px 2px #a0acb84a" }}>
            <div className="container-fluid container">
                <a className="navbar-brand" href="/">
                    <img src={require("../Images/OLXlogo.png")} width="48" height="27" className="d-inline-block align-top" alt="OLX-logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* <button type="button" className="btn btn-outline" style={{ border: "2px solid #002f34" }}> <i className="fa fa-search pe-3" aria-hidden="true"></i><input type="text" value={'pakistan'} placeholder="Search city,area or location.." style={{ border: "none", outline: "none" }} /></button>

                        <button type="button" className="btn btn-outline ms-3" style={{ border: "2px solid #002f34" }}> <input type="text" placeholder="Find Cars,Mobile Phones and more..." style={{ border: "none", outline: "none" }} /><i className="fa fa-search ps-3" aria-hidden="true"></i></button> */}

                        <form className="d-flex" role="search">

                            {/*for  location bar */}
                            <div className='d-flex' style={{ border: "2px solid black", borderRadius: "3px", height: "50px", width: "300px" }} >
                                <i className="fa fa-search my-auto ms-2 me-1" aria-hidden="true" />
                                <input style={{ border: "none", outline: "none", width: "100%" }} className="me-2" type="search" placeholder="Search city,area or location.." aria-label="Search" />
                                <i className='fas fa-angle-down my-auto me-2' style={{ fontSize: "24px" ,cursor:"pointer"}}></i>
                            </div>

                            {/* for products search bar */}
                            <div className='d-flex ms-3' style={{ border: "2px solid black", borderRadius: "3px", height: "50px", width: "600px" }} >
                                <input style={{ border: "none", outline: "none", width: "100%" }} className="me-2 ms-2" type="search" placeholder="Find Cars,Mobile Phones and more..." aria-label="Search" />
                            </div>


                            <div className='d-flex justify-content-center align-items-center' style={{ backgroundColor: "black", height: "100%", width: "50px", color: "white", borderRadius: "3px", fontSize: "24px",cursor:"pointer" }}>
                                <i className="fa fa-search  " aria-hidden="true"  />
                            </div>
                            <div className='d-flex justify-content-center align-items-center ms-3'>
                                <h5>English</h5>
                            </div>

                            <div className='d-flex justify-content-center align-items-center ms-3'>
                                <button className='btn' style={{ textDecoration: "underline", outline: "none", border: "none" }}><h5>Login</h5></button>
                            </div>

                            <div className='d-flex justify-content-center align-items-center ms-3'>
                                <button className='btn btn-primary' style={{borderRadius:'3px'}} >
                                    <div style={{fontSize:"20px"}} className='d-flex justify-content-center align-items-center'>
                                        <i className="fa fa-plus me-1" aria-hidden="true"></i>
                                        Sell
                                    </div>
                                </button>
                            </div>

                        </form>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar
