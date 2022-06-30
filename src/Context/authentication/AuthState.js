import AuthContext from "./AuthContext";
import { useState } from "react";


const AuthState=(props)=>{

    const [modalState,setmodalState]=useState(false);
    const [user,setUser]=useState({})
    const setModalState=(NewmodalState)=>{
        setmodalState(NewmodalState);
    }
    
    return (
    <AuthContext.Provider value={{modalState,setModalState,user}}>
        {props.children}
    </AuthContext.Provider>
    );
}

export default AuthState