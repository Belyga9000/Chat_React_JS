import  "./Form.scss";
import { useState } from "react";
import Button from '@mui/material/Button';
import  {TextField}  from "@mui/material";
import  {Input}  from "@mui/material";

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
        const bot = false;
        e.preventDefault();
        onSubmit(author,text,bot)
        setText("")
        setAuthor("")
        
    }
    return (<form onSubmit={handleSubmit}>
        <Input 
            className="Form-input"
            autoFocus placeholder="Введите имя Автора"
            value={author} 
            onChange={getNameValue}
            type="text"></Input>
        <TextField
            autoComplete="off"
            multiline
            maxRows={4}
            placeholder="Сообщение"
            value={text} 
            onChange={getMessageValue}></TextField>
        <Button 
            className="Form-btn"
            type="submit" 
            variant="outlined">submit</Button>
    </form>)
}