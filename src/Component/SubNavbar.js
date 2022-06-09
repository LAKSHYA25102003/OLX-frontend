import React from 'react'
import "./Subnavbar.css"
const SubNavbar = () => {
    return (
        <div className='subnav' style={{ boxShadow: "2px 2px 2px #a0acb84a",overflowX:"auto",height:"55px" }}>
            <div className='container' >
                <ul className='d-flex list align-items-center ps-0'>
                    <li className="subnavlink d-flex ps-0 ms-0 align-items-center">
                        <button className='btn navlink fs-5 ps-0' style={{ outline: "none", border: "none", fontWeight: "bold" }}>All Categories</button>
                        <i className='fas fa-angle-down  me-3' style={{ fontSize: "24px", cursor: "pointer" }}></i>
                    </li>
                    <li className="subnavlink">
                        <a className='navlink' href="#">Cars</a>
                    </li>
                    <li className="subnavlink">
                        <a className='navlink' href="#">Motorcycles</a>
                    </li>
                    <li className="subnavlink">
                        <a className="navlink" href="#">Mobile Phones</a>
                    </li>
                    <li className="subnavlink">
                        <a className="navlink" href="#">For Sale:Houses and Apartments</a>
                    </li>
                    <li className="subnavlink">
                        <a className="navlink" href="#">Scooters</a>
                    </li>
                    <li className="subnavlink">
                        <a className="navlink" href="#">Commercial & other Vehicles</a>
                    </li>
                    <li className="subnavlink">
                        <a className="navlink" href="#">For Rent:Houses and Apartments</a>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default SubNavbar
