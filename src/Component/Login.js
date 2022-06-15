import React from 'react'

function Login() {
    return (
        <div className='container' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "30%", height: "60%",borderRadius:"8px" ,display: "flex", flexDirection: "column", marginTop: "50px", alignContent: "center", justifyContent: "center", margin: "70px",paddingBottom:"10px",boxShadow: "-15px -15px 4px -3px rgba(115,113,113,0.6)",backgroundColor:"rgb(101,107,255)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "10px", padding: "9px" }}>
                    <img src={require("../Images/OLXlogo.png")} alt="OLX" style={{ width: "30%", height: "30%" }} />
                </div>
                <form style={{ display: "flex", flexDirection:"column", alignItems: "center", justifyContent: "center" }}>
                    <div style={{paddingBottom:"20px" ,fontWeight:"bold", fontSize:"20px"}}>
                    <label htmlFor="email">Enter your email to login</label>
                    </div>
                    <div>
                        <input required="true" type="email" id="email" style={{width:"350px" , marginBottom:"20px",padding:"7px" ,border:"none",borderRadius:"5px",}} placeholder="Email" />
                    </div>
                    <div style={{marginBottom:"10px"}}>
                        <button className='btn btn-dark' type='submit'>Next</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
