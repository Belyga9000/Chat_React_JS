import { List } from "@mui/material";
import { AddChatForm } from "./AddChatForm";
import { ChatItem } from "./ChatItem";
import "./ChatList.scss"

export const ChatList = ({ onAddChatSubmit, chatList, onChatDelete }) => {
  return (
            <List className="Chat-list">
                {chatList.map((chat) => <ChatItem key={chat.id} chat={chat} onDeleteChat={onChatDelete} />)}
                <AddChatForm onSubmit={onAddChatSubmit} />
            </List>
            
  )
}
