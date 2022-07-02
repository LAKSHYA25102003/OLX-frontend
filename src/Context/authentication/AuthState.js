import AuthContext from "./AuthContext";
import { useState } from "react";


const AuthState=(props)=>{

    const [modalState,setmodalState]=useState(false);
    const [user,setUser]=useState({})
    const setModalState=(NewmodalState)=>{
        setmodalState(NewmodalState);
    }
    const [showLoginAlert,setLoginAlert] = useState(false)
    
    return (
    <AuthContext.Provider value={{modalState,setModalState,user,showLoginAlert,setLoginAlert}}>
        {props.children}
    </AuthContext.Provider>
    );
}

export default AuthState