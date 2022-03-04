import Button from '@mui/material/Button';
import { TextField }  from "@mui/material";
import  "./Form.scss";


export const Form = ({ getMessageValue, text, onhandleSubmit }) => {

    return (
        <form onSubmit={ onhandleSubmit }>
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
    </form>
  )
}