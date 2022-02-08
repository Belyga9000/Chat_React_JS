import React from 'react';
import { useEffect, useState } from "react";
import './MessageList.scss'
import { Form } from '../Form/Form';
import { Message } from '../Message/Message';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

export const MessageList = () => {
  const [messagesList,setMessagesList] = useState({
    chat1: [],
    chat2: [],
    chat3: [],
  });
  
  const { chatId } = useParams();
  const handleAddMessage = (author,text,isBot) => {
    const newMsg = {
      author,
      text,
      isBot,
      id: `msgId_${Date.now()}`,
    }

    setMessagesList((prevMessagesList) => ({
      ...prevMessagesList,
      [chatId]: [...prevMessagesList[chatId],newMsg]
    })); 
   };

  useEffect(() => {
    const bot = {
      author: "Robot",
      text: "Hello",
      isBot: true
    }

    let timeout;

    if (messagesList[chatId]?.[messagesList[chatId]?.length - 1]?.isBot === false) {
      timeout = setTimeout(() => {
        handleAddMessage(bot.author,bot.text,bot.isBot,)
      }, 1000);
    }
    return () => {
      clearTimeout(timeout)
    }
  },[messagesList]);

  if(!messagesList[chatId]){
    return <Navigate to="/Chats" replace />
  }

  return (<>
        <Message messages={messagesList[chatId]}></Message>
        <Form onSubmit={handleAddMessage}></Form></>
        )
};
