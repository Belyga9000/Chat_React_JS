import { List } from "@mui/material";
import { Outlet } from "react-router-dom";
import { AddChatForm } from "./AddChatForm";
import { ChatItem } from "./ChatItem";
import "./ChatList.scss"



export const ChatList = ({ chats, onDeleteChat, onAddChat}) => (
        <>
            <List className="Chat-list">
                {chats.map((chat) => <ChatItem key={chat.id} chat={chat} onDeleteChat={onDeleteChat} />)}
                <AddChatForm onSubmit={onAddChat} />
            </List>
            <Outlet />
        </>
);