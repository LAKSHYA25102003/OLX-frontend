import ItemContext from "./ItemContext";
import { useState } from "react";

const ItemState=(props)=>{
    const [items,setItems]=useState([])
    const [itembyID,setItembyID]=useState({})
    const fetchItembyID=async (id)=>{
        const url=`http://localhost:5000/api/item/getItem/${id}`
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                'auth-token':localStorage.getItem('token')
            }
        })
        console.log(response.status);
        const json=await response.json()
        setItembyID(json)
    }
    const fetchItem=async ()=>{
        const url='http://localhost:5000/api/item/getAllItem'
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                // 'auth-token':localStorage.getItem('token')
            }
        })
        console.log(response.status);
        const json=await response.json()
        setItems(json)
    }
    return (
        <ItemContext.Provider value={{items,fetchItem,itembyID,fetchItembyID,}}>
            {props.children}
        </ItemContext.Provider>
    )
}
export default ItemState;