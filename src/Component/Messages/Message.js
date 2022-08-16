import "./message.css"
import { format } from "timeago.js";

export default function Message(props) {
    const {own,message}=props;
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <p className="messageTopText">{message.text}</p>
      </div>
      <div className="messageBottom">
        {format(message.createdAt)}
      </div>
    </div>
  )
}
