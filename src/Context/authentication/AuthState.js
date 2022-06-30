import AuthContext from "./AuthContext";
import { useState } from "react";

const AuthState=(props)=>{

    const [modalState,setmodalState]=useState(false);
    const [user,setUser]=useState({})
    const setModalState=(NewmodalState)=>{
        setmodalState(NewmodalState);
    }
    const fetchuser=async ()=>{
        const url=`http://localhost:5000/api/auth/getuser`
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                'auth-token':localStorage.getItem('token')
            }
        })
        console.log(response.status);
        const json=await response.json()
        setUser(json)
    }
    return (
    <AuthContext.Provider value={{modalState,setModalState,user,fetchuser}}>
        {props.children}
    </AuthContext.Provider>
    );
}

export default AuthState