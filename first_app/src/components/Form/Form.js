import  "./Form.scss";
import { useState } from "react";

export const Form = ({onSubmit}) => {
    const [author, setAuthor] = useState("");
    const getNameValue = (e) => {
        setAuthor(e.target.value);
    };
    const [text, setText] = useState("");
    const getMessageValue = (e) => {
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(author,text)
    }

    return  <form onSubmit={handleSubmit}>
        <label>Введите Имя Автора</label>
        <input value={author} onChange={getNameValue} type="text"></input>
        <label>Введите сообщение</label>
        <textarea value={text} onChange={getMessageValue} ></textarea>
        <input type="submit"></input>
    </form>
}