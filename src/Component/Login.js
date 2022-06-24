import { useNavigate } from "react-router-dom"
import { useState } from "react";

function Login() {

    const [loginCred,setLoginCred]=useState({
        email:"",
        password:""
    })

    const onChangeHandler=(event)=>{
        setLoginCred({...loginCred,[event.target.name]:event.target.value});
    }


    const loginSubmitHandler = async (event) => {
        event.preventDefault();
        const url = "http://localhost:5000/api/auth/login";
        const data = {
            email: loginCred.email,
            password: loginCred.password,
        }
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(data)

        })
        console.log(response.status);
    }


    const navigate = useNavigate();

    const handleRegister = () => {
        navigate("/sign-up");
    }

    return (
        <div className='container' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "30%", height: "60%", borderRadius: "8px", display: "flex", flexDirection: "column", marginTop: "50px", alignContent: "center", justifyContent: "center", margin: "70px", paddingBottom: "10px", boxShadow: "-15px -15px 4px -3px rgba(115,113,113,0.6)", backgroundColor: "rgb(101,107,255)",position:"relative"}}>
                <i
                    style={{position:"absolute",top:"10px",right:"10px",cursor:"pointer",fontSize:"20px"}}
                    class="fa fa-times"
                    aria-hidden="true"
                    onClick={() => {
                        navigate("/");
                    }}>
                        
                </i>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "10px", padding: "9px" }}>
                    <img src={require("../Images/OLXlogo.png")} alt="OLX" style={{ width: "30%", height: "30%" }} />
                </div>
                <form style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }} onSubmit={loginSubmitHandler}>
                    <div style={{ paddingBottom: "20px", fontWeight: "bold", fontSize: "20px" }}>
                        <label htmlFor="email">Enter your email to login</label>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%" }}>
                        <input name="email" value={loginCred.email} required="true" type="email" id="email" placeholder="Email" style={{ margin: "8px", padding: "5px", width: "80%", borderRadius: "5px" }} onChange={onChangeHandler} />
                        <input name="password" value={loginCred.password} type="password" required="true" placeholder='Password' style={{ margin: "8px", padding: "5px", width: "80%", borderRadius: "5px" }} onChange={onChangeHandler} />
                        <p
                            style={{ marginX: "auto", color: "white", cursor: "pointer" }}
                            onClick={handleRegister} >
                            Have not account? Register
                        </p>
                        <p
                            style={{ marginX: "auto", color: "white", cursor: "pointer" }}
                            onClick={()=>{
                                navigate("/reset-password")
                            }} >
                            Forget Password ?
                        </p>
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                        <button className='btn btn-dark' type='submit'>Next</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
