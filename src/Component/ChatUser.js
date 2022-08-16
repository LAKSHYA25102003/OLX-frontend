import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../Context/authentication/AuthContext'
import { useState } from 'react'
import UserCard from './UserCard'

export default function ChatUser() {

    const navigate = useNavigate();
    const context = useContext(AuthContext);
    const { fetchuser, loggedInuser } = context;
    const params = useParams();
    const chatId = params.id;
    const [chatConversations, setChatConversations] = useState([]);

    const getConversations = async () => {
        const url = `http://localhost:5000/api/conversation/chat-conversation/${chatId}`;
        let response = await fetch(url, {
            method: "get"
        });
        response = await response.json();
        if (response.success === true) {
            setChatConversations(response.chatConversations);
        }
    }
    useEffect(() => {
        getConversations();
        fetchuser();
    }, [loggedInuser])

    return (loggedInuser.length !== 0) && (
        <div className="row gx-3 mb-3" style={{ margin: "auto" }}>
            {
                chatConversations.map((c)=>{
                    return (
                        <div key={c._id}>
                            <UserCard conversation={c} currUser={loggedInuser}/>
                        </div>
                    )
                })
            }
        </div>
    )
}
