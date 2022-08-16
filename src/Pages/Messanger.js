import "./messanger.css";
import { Card, Button } from 'react-bootstrap'
import Navbar from "../Component/Navbar";
import Message from "../Component/Messages/Message";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useRef } from "react";
import { io } from "socket.io-client";
import AuthContext from "../Context/authentication/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Messanger() {
    const navigate=useNavigate();
    const scrollRef = useRef();
    const context = useContext(AuthContext);
    const [text, setText] = useState("");
    const { loggedInuser, fetchuser } = context;
    const [messages, setMessages] = useState([]);
    const params = useParams();
    const conversationId = params.id;
    const [conversation,setConversation]=useState(null);
    const socket=useRef();
    const [arrivalMessage,setArrivalMessage]=useState(null);

    useEffect(()=>{
        if(!localStorage.getItem('auth-token'))
        {
            navigate("/login");
        }
    },[]);

    useEffect(()=>{
        if(loggedInuser.length!==0)
        {
            socket.current?.emit("addUser", loggedInuser[0]._id);
        }
    },[loggedInuser])

    useEffect(()=>{
        socket.current=io("ws://localhost:9000");
        socket.current.on("getMessage",({senderId,text,itemId})=>{
            setArrivalMessage({
                sender: senderId,
                text: text,
                itemId:itemId,
                createdAt: Date.now()
            })
        })
    },[])

    useEffect(()=>{
        arrivalMessage&&conversation?.members.includes(arrivalMessage.sender)&&(arrivalMessage.itemId===conversation.item)&&setMessages((prev)=>[...prev,arrivalMessage])
    },[arrivalMessage,conversation])

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages.length])


    useEffect(() => {
        fetchuser();
    }, [loggedInuser, loggedInuser.length])

    const sendHandler = async (e) => {
        e.preventDefault();
        if (text === "") {
            return;
        }
        const url = "http://localhost:5000/api/message";
        const data = {
            text: text,
            sender: loggedInuser[0]._id,
            conversationId: conversationId
        }
        let response = await fetch(url, {
            method: "post",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        response = await response.json();
        if (response.success === true) {
            setMessages((prev) => [...prev, response.message]);
            socket.current.emit("sendMessage",{
                recieverId:currChat._id,
                senderId:loggedInuser[0]._id,
                text:text,
                itemId:conversation.item
            });
        }
        setText("");
    }

    const onchange = (e) => {
        e.preventDefault();
        setText(e.target.value);
    }

    const fetchmessages = async () => {
        const url = `http://localhost:5000/api/message/${conversationId}`;
        let response = await fetch(url, {
            method: "get",
        })
        response = await response.json();
        if (response.success === true) {
            setMessages(response.messages);
        }
    }

    const [currChat,setCurrChat]=useState(null);
    const fetchUserById=async ()=>{
        let cc=null;
        if(conversation===null)
        {
            return ;
        }
        for(let i=0;i<conversation.members.length;i++)
        {
            if(conversation.members[i]!==loggedInuser[0]._id)
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

    const findConversation=async ()=>{
        const url=`http://localhost:5000/api/conversation/get-conversation/${conversationId}`;
        let response = await fetch(url,{
            method:"get"
        })
        response=await response.json();
        if(response.success===true)
        {
            setConversation(response.conversation);
        }
    }

    useEffect(()=>{
        fetchUserById();
    },[conversation])

    useEffect(() => {
        fetchmessages();
        findConversation();
    }, [])



    return (loggedInuser.length !== 0) &&(currChat!==null)&& (
        <div>
            <Navbar />
            <div className="messangerContainer">
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        <div className="chatBoxTop">
                            {
                                messages.map((m) => {
                                    return (
                                        <div key={m._id} ref={scrollRef}>
                                            <Message message={m} own={m.sender === loggedInuser[0]._id} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="chatBoxBottom">
                            <textarea value={text} className="chatMessageInput" placeholder="Write something..." onChange={onchange}>

                            </textarea>
                            <button className="chatSubmitButton" onClick={sendHandler} >
                                Send
                            </button>
                        </div>
                    </div>

                </div>
                <div className="otherUser">
                    <div className="col-md-3 my-2 other">
                        <Card style={{ width: '18rem', borderRadius: "25px", borderColor: "black" }} >
                            <Card.Img variant="top" src="http://bootdey.com/img/Content/avatar/avatar1.png" style={{ borderRadius: "25px" }} />
                            <Card.Body>
                                <Card.Title style={{ fontWeight: "bold", fontSize: "15px" }}>{currChat.email}</Card.Title>
                                <Button variant="primary">{currChat.name}</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
