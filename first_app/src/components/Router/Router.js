import { BrowserRouter,Routes,Route, Link } from "react-router-dom";
import { Chat } from "../Chat/Chat";
import { ChatListContainer } from "../ChatList/ChatListContainer";
import { Profile } from "../Profile/Profile";
import { UsersContainer } from "../Users/UsersContainer";
import "./Router.scss"


export const Router = () => {

    return (
        <BrowserRouter>
        <ul className="Link-list">
            <li className="Link-list__item"><Link to="/">Home</Link></li>
            <li className="Link-list__item"><Link to="/chats">Chats</Link></li>
            <li className="Link-list__item"><Link to="/profile">Profile</Link></li>
            <li className="Link-list__item"><Link to="/users">Users</Link></li>
        </ul>
            <Routes>
                <Route path="/"></Route>
                <Route path="chats">
                    <Route index element={<ChatListContainer  />} />
                    <Route path=':chatId' element={<Chat />} />
                </Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/users" element={<UsersContainer />}></Route>
            </Routes>
        </BrowserRouter>
    )
}