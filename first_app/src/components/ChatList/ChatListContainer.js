//import { onValue, set } from "firebase/database";
//import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { chatsRef, getChatsRefById, getMessageRefById, getMessagesRefByChatId } from "../../services/firebase";
import { addChat, deleteChat, initChatsTracking } from "../../store/chats/actions";
import { selectChatList } from "../../store/chats/selectors";
import { ChatList } from "./ChatList";


export const ChatListContainer = () => {

    const dispatch = useDispatch();
    const chatList = useSelector(selectChatList)
    //const [chatList,setChatList] = useState([])

    const handleAddChat = (chatName) => {
        const newId = `chat${Date.now()}`
         dispatch(addChat(newId,chatName));
        // set(getChatsRefById(newId), { id: newId, name: newChat.name });
        // set(getMessagesRefByChatId(newId), { empty: true });
    }
    // useEffect(() => {
    //     dispatch(initChatsTracking())
    // }, []);

    const handleDeleteChat = (idToDelete) => {
        dispatch(deleteChat(idToDelete));
        //set(getChatsRefById(idToDelete), null)
    }
    return( 
        <ChatList  chatList={chatList} onAddChatSubmit={handleAddChat} onChatDelete={handleDeleteChat}></ChatList>
    )
}
