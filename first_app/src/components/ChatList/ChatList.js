import { List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";
import "./ChatList.scss"

export const ChatList = () => {
    const chatList = [
        {
            name: "Chat 1",
            id: "chat1"
        },
        {
            name: "Chat 2",
            id: "chat2"
        },
        {
            name: "Chat 3",
            id: "chat3"
        }
    ]
    return (<>
                <List className="Chat-list">
                    {chatList.map((chatList) => 
                    (<ListItem className="Chat-list__item" key={chatList.id}>
                        <Link to={`/Chats/${chatList.id}`}>{chatList.name}</Link></ListItem> ))}
                </List>
            </>
    );
  }