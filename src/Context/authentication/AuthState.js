import AuthContext from "./AuthContext";
import { useState } from "react";

const AuthState=(props)=>{

    const [modalState,setmodalState]=useState(false);

    const setModalState=(NewmodalState)=>{
        setmodalState(NewmodalState);
    }
    return (
    <AuthContext.Provider value={{modalState,setModalState}}>
        {props.children}
    </AuthContext.Provider>
    );
}

export default AuthState