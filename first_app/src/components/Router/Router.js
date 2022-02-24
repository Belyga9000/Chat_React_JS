import { BrowserRouter,Routes,Route, Link } from "react-router-dom";
import { Chat } from "../Chat/Chat";
import { ChatList } from "../ChatList/ChatList";
import { Profile } from "../Profile/Profile";
import "./Router.scss"


export const Router = () => {
    return (
        <BrowserRouter>
        <ul className="Link-list">
            <li className="Link-list__item"><Link to="/">Home</Link></li>
            <li className="Link-list__item"><Link to="/Chats">Chats</Link></li>
            <li className="Link-list__item"><Link to="/Profile">Profile</Link></li>
        </ul>
            <Routes>
                <Route path="/"></Route>
                <Route path="Chats">
                    <Route index element={<ChatList />}/>
                    <Route path=':chatId' element={<Chat />}/>
                </Route>
                <Route path="/Profile" element={<Profile />}></Route>
            </Routes>
        </BrowserRouter>
    )
}