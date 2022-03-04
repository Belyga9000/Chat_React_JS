import { BrowserRouter,Routes,Route, Link } from "react-router-dom";
import { Chat } from "../Chat/Chat";
import { ChatListContainer } from "../ChatList/ChatListContainer";
import { Profile } from "../Profile/Profile";
import "./Router.scss"


export const Router = () => {

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
                    <Route index element={<ChatListContainer  />} />
                    <Route path=':chatId' element={<Chat />} />
                </Route>
                <Route path="/Profile" element={<Profile />}></Route>
            </Routes>
        </BrowserRouter>
    )
}