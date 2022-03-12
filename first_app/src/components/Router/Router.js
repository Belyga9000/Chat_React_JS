import { useEffect, useState } from "react";
import { BrowserRouter,Routes,Route, Link } from "react-router-dom";
import { Chat } from "../Chat/Chat";
import { onAuthStateChanged } from "firebase/auth";
import { ChatListContainer } from "../ChatList/ChatListContainer";
import { ConnectedProfileContainer } from "../ConnectedProfile/ConnectedProfileContainer";
import { Home } from "../Home/Home";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";
import { PublicRoute } from "../PublicRoute/PublicRoute";
import { UsersContainer } from "../Users/UsersContainer";
import "./Router.scss"
import { auth } from "../../services/firebase";


export const Router = () => {
    const [authed,setAuthed] = useState(false)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(user) => {
            if (user) {
                setAuthed(true)
            } else {
                setAuthed(false)
            }
        });
        return unsubscribe
    },[])

    return (
        <BrowserRouter>
        <ul className="Link-list">
            <li className="Link-list__item"><Link to="/">Home</Link></li>
            <li className="Link-list__item"><Link to="/chats">Chats</Link></li>
            <li className="Link-list__item"><Link to="/profile">Profile</Link></li>
            <li className="Link-list__item"><Link to="/users">Users</Link></li>
        </ul>
            <Routes>
                <Route path="/" element={<PublicRoute authed={authed} />}>
                    <Route path="" element={<Home />} />
                    <Route path="/signup" element={<Home isSignUp />} />
                </Route>    
                <Route path="chats">
                    <Route path=':chatId' element={<Chat />} />
                    <Route index element={<ChatListContainer  />} />
                </Route>
                <Route path="/profile" element={<PrivateRoute authed={authed} />}>
                    <Route path="" element={<ConnectedProfileContainer />} />    
                </Route>
                <Route path="/users" element={<UsersContainer />}></Route>
            </Routes>
        </BrowserRouter>
    )
}