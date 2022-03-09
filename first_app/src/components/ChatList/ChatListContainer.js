import { onValue, set } from "firebase/database";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chatsRef, getChatsRefById, getMessageRefById, getMessagesRefByChatId } from "../../services/firebase";
import { addChat, deleteChat } from "../../store/chats/actions";
import { selectChatList } from "../../store/chats/selectors";
import { ChatList } from "./ChatList";


export const ChatListContainer = () => {

    const dispatch = useDispatch();
    // const chatList = useSelector(selectChatList)
    const [chatList,setChatList] = useState([])

    const handleAddChat = (chatName) => {
        const newId = `chat${Date.now()}`
        const newChat = {
            id: newId,
            name: chatName,
        }
        // dispatch(addChat(newId, chatName));
        set(getChatsRefById(newId), { id: newId, name: newChat.name });
        set(getMessagesRefByChatId(newId), { empty: true });
    }
    useEffect(() => {
        const newChats = [];
        const unsubscribe = onValue(chatsRef, (snapshot) => {
            snapshot.forEach((child) => {
                newChats.push(child.val())
            })

            setChatList(newChats)
        });
        return unsubscribe
    },);

    const handleDeleteChat = (idToDelete) => {
        //dispatch(deleteChat(idToDelete));
        set(getChatsRefById(idToDelete), null)
    }
    return( 
        <ChatList  chatList={chatList} onAddChatSubmit={handleAddChat} onChatDelete={handleDeleteChat}></ChatList>
    )
}
