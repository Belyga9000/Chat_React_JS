import { useState } from "react";
import { Form } from "./Form";

export const FormContainer = ({ onSubmit }) => {
    
    const [text, setText] = useState("");
    const getMessageValue = (e) => {
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        const author = "Dog";
        const isBot = false;
        e.preventDefault();
        onSubmit(author,text,isBot)
        setText("")
    }

  return (
    <Form getMessageValue={getMessageValue} onhandleSubmit={handleSubmit} text={text}></Form>)
};
