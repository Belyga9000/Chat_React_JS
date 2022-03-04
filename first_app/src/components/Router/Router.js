import { BrowserRouter,Routes,Route, Link } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Chat } from "../Chat/Chat";
import { ChatList } from "../ChatList/ChatList";
import { Profile } from "../Profile/Profile";
import "./Router.scss"
import { addChat, deleteChat } from "../../store/chats/actions";
import { selectChatList } from "../../store/chats/selectors";
import { selectMessages } from "../../store/messages/selectors";
import { addMessage } from "../../store/messages/actions";

const initialChats = [
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
    },
    {
        name: "Chat 4",
        id: "chat4"
    }
]


export const Router = () => {
    // const initialMessages = initialChats.reduce((acc, el) => {
    //     acc[el.id] = [];
    //     return acc
    // }, {});
    

    //const [chatList,setChatList] = useState(initialChats);
    //const [messages,setMessages] = useState(initialMessages);

    const chatList = useSelector(selectChatList, shallowEqual)
    const messages = useSelector(selectMessages, shallowEqual)
    const dispatch = useDispatch();

    const handleAddMessage = (chatId,newMsg) => {
        dispatch(addMessage(chatId,newMsg))
        // setMessages((prevMessagesList) => ({
        //     ...prevMessagesList,
        //     [chatId]: [...prevMessagesList[chatId],newMsg]
        //   })); 
    }
    
    const handleAddChat = (chatName) => {
        const newId = `chat${Date.now()}`
        const newChat = {
            id: newId,
            name: chatName,
        }

        dispatch(addChat(newId, chatName));
        //setChatList((prevChatList) => [...prevChatList, newChat])
        // setMessages((prevMessages) => ({
        //     ...prevMessages,
        //     [newId]:[]
        // }));
    }
    const handleDeleteChat = (idToDelete) => {
        dispatch(deleteChat(idToDelete));
        //setChatList((prevChatList) => prevChatList.filter((chat) => chat.id !== idToDelete))
        // setMessages((prevMessages) => {
        //     const newMsg = { ...prevMessages }
            
        //     delete newMsg[idToDelete];
        //     return newMsg;
        // })
    }
    return (
        <BrowserRouter>
        <ul className="Link-list">
            <li className="Link-list__item"><Link to="/">Home</Link></li>
            <li className="Link-list__item"><Link to="/chats">Chats</Link></li>
            <li className="Link-list__item"><Link to="/Profile">Profile</Link></li>
        </ul>
            <Routes>
                <Route path="/"></Route>
                <Route path="chats">
                    <Route index element={<ChatList onDeleteChat={handleDeleteChat} onAddChat={handleAddChat} chats={chatList} />} />
                    <Route path=':chatId' element={<Chat onDeleteChat={handleDeleteChat} chats={chatList} messages={messages} onAddChat={handleAddChat} onaddMessage={handleAddMessage} />} />
                </Route>
                <Route path="/Profile" element={<Profile />}></Route>
            </Routes>
        </BrowserRouter>
    )
}