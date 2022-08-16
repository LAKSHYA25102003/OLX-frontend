import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';

export default function UserCard(props) {
    const [currChat,setCurrChat]=useState(null);
    const {conversation,currUser}=props;

    const fetchUserById=async ()=>{
        let cc=null;
        for(let i=0;i<conversation.members.length;i++)
        {
            if(conversation.members[i]!==currUser[0]._id)
            {
                cc=conversation.members[i];
                break;
            }
        }

        const url=`http://localhost:5000/api/user/${cc}`;
        let response=await fetch(url,{
            method:"get"
        })
        response=await response.json();
        if(response.success===true)
        {
            setCurrChat(response.user);
        }
    }

    useEffect(()=>{
        fetchUserById();
    },[])

    return (currChat!==null)&&(currUser!==undefined)&&(
        <div className="col-md-3 my-2">
            <Card style={{ width: '18rem', borderRadius: "25px", borderColor: "black" }} >
                <Card.Img variant="top" src="http://bootdey.com/img/Content/avatar/avatar1.png" style={{ borderRadius: "25px" }} />
                <Card.Body>
                    <Card.Title style={{ fontWeight: "bold", fontSize: "15px" }}>{currChat.email}</Card.Title>
                    <Button variant="primary"><Link to={`/messanger/${conversation._id}`} style={{ color: "white" }}>Chat With {currChat.name}</Link></Button>
                </Card.Body>
            </Card>
        </div>
    )
}
