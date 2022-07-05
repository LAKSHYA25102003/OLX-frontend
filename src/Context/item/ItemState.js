import ItemContext from "./ItemContext";
import { useState } from "react";

const ItemState=(props)=>{
    const [items,setItems]=useState([])
    const [userItems,setUserItems]=useState([])
    const [itembyID,setItembyID]=useState([])
    const [itembycategory,setItembyCategory]=useState([])
    const [userLikedItems,setUserLikedItems]=useState([])
    const fetchlikedItem=async()=>{
        const url=`http://localhost:5000/api/item/userLikedItems`
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                'auth-token':localStorage.getItem('token')
            }
        })
        console.log(response.status);
        const json=await response.json()
        setUserLikedItems(json)
    }
    const likeItem=async(id)=>{
        const url=`http://localhost:5000/api/item/addToFavorite/${id}`
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                'auth-token':localStorage.getItem('token')
            }
        })
    }
    const deleteItem=async(id)=>{
        const url=`http://localhost:5000/api/item/delItem/${id}`
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': "application/json",
                'auth-token':localStorage.getItem('token')
            }
        })
    }
    const fetchUserItems=async()=>{
        const url=`http://localhost:5000/api/item/user-items`
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                'auth-token':localStorage.getItem('token')
            }
        })
        console.log(response.status);
        const json=await response.json()
        setUserItems(json)
        console.log("useritem:- ",json)
    }
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
        console.log(json)
        setItembyID(json)
    }
    const fetchByCategory=async(cat)=>{
        const url=`http://localhost:5000/api/item/allitems/${cat}`
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                // 'auth-token':localStorage.getItem('token')
            }
        })
        const json=await response.json()
        setItembyCategory(json)
    }
    const fetchItem=async ()=>{
        const url=`http://localhost:5000/api/item/getAllItem`
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
        <ItemContext.Provider value={{items,fetchItem,itembyID,fetchItembyID,fetchByCategory,itembycategory,fetchUserItems,userItems,deleteItem,likeItem,userLikedItems,fetchlikedItem}}>
            {props.children}
        </ItemContext.Provider>
    )
}
export default ItemState;