import { useDispatch, useSelector } from "react-redux";
import { addChat, deleteChat } from "../../store/chats/actions";
import { selectChatList } from "../../store/chats/selectors";
import { ChatList } from "./ChatList";


export const ChatListContainer = () => {

    const dispatch = useDispatch();
    const chatList = useSelector(selectChatList)

    const handleAddChat = (chatName) => {
        const newId = `chat${Date.now()}`
        const newChat = {
            id: newId,
            name: chatName,
        }
        dispatch(addChat(newId, chatName));
    }

    const handleDeleteChat = (idToDelete) => {
        dispatch(deleteChat(idToDelete));
    }
    return( 
        <ChatList  chatList={chatList} onAddChatSubmit={handleAddChat} onChatDelete={handleDeleteChat}></ChatList>
    )
}
