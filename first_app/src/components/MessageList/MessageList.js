import React from 'react';
import './MessageList.scss'
import { Form } from '../Form/Form';
import { useEffect, useState } from "react";
import  {List}  from '@mui/material';
import  {ListItem}  from '@mui/material';
import  {ListItemText}  from '@mui/material';

export const MessageList = () => {
  const [messages,setMessages] = useState([]);

  const handleAddMessage = (author,text,bot) => {
    setMessages((prevMessages) => [...prevMessages,{author,text,bot}]); 
   };

  useEffect(() => {
    let timeout;
    if (messages[messages.length - 1]?.bot === false) {
      timeout = setTimeout(() => {
        setMessages((prevMsg) => [...prevMsg,{author: "Robot",text: "hi",bot:true}])
      }, 1000);
    }
    return () => {
      clearTimeout(timeout)
    }
  },[messages]);


  return (<div className='Message-list'>
        <List >
         {messages.map((message, index) =>(
            <ListItem>
                <ListItemText
                    key={index} 
                    className="Message-text"
                    primary={message.author + ': '} />
                    <ListItemText 
                        className="Message-text"
                        primary={message.text} />
                </ListItem>))}
        </List>
        <Form onSubmit={handleAddMessage}></Form>
        </div>)
};
