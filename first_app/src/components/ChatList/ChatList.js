import { List, ListItem } from "@mui/material";
import "./ChatList.scss"
export const ChatList = () => {
    const chatList = ["chat1","chat2"]
    return (
        <div className="Chat-list">
            {chatList.map((chatName, index) =><List key={index}><ListItem >{chatName}</ListItem></List> )}
        </div>
    );
  }