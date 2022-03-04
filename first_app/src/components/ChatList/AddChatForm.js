import { useState } from "react"

export const AddChatForm = ({ onSubmit }) => {

    const [chatName,setChatName] = useState("");
    const handleChatName = (e) => {
        setChatName(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(chatName)
    }
  return (
    <form onSubmit={handleSubmit}>
    <input type="text" value={chatName} onChange={handleChatName} name="chatName" placeholder="Имя чата"></input>
    <button type="submit" >Добавить</button>
</form>)
}
