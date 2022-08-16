import AuthContext from "./AuthContext";
import { useState } from "react";


const AuthState=(props)=>{

    const [modalState,setmodalState]=useState(false);
    const [loggedInuser,setLoggedInuser]=useState([]);
    const [user,setUser]=useState({})
    const setModalState=(NewmodalState)=>{
        setmodalState(NewmodalState);
    }
    const [showLoginAlert,setLoginAlert] = useState(false)
    const [showPassAlert,setPassAlert] = useState(false)

    const fetchuser=async ()=>{
        const url=`http://localhost:5000/api/auth/getuser`
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                'auth-token':localStorage.getItem('token') // yokrn
            }
        })
        const json= await response.json()
        setLoggedInuser(json)
      }

      
    
    return (
    <AuthContext.Provider value={{modalState,setModalState,user,showLoginAlert,setLoginAlert,showPassAlert,setPassAlert,fetchuser,loggedInuser}}>
        {props.children}
    </AuthContext.Provider>
    );
}

export default AuthState