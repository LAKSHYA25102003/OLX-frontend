import React,{useEffect,useContext} from 'react'
import Editprofile from './Editprofile'

export default function Profile() {1
    const context=useContext(AuthContext)
    const {user,fetchuser}=context
    const getuser=async()=>{
        await fetchuser()
    }
    useEffect(()=>{
        getuser()
        console.log(user)
    },[])
  return (
    <Editprofile user={user}></Editprofile>
  )
}
