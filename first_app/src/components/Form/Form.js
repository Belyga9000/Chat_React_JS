import  "./Form.scss";
import { useState } from "react";
import Button from '@mui/material/Button';
import { TextField }  from "@mui/material";

export const Form = ({ onSubmit }) => {
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
    return (<form onSubmit={ handleSubmit }>
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