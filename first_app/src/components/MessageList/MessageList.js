import React from 'react';
import { useEffect } from "react";
import './MessageList.scss'
import { Form } from '../Form/Form';
import { Message } from '../Message/Message';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectMessages } from '../../store/messages/selectors';

export const MessageList = ({ addMessage }) => {
  const messages = useSelector(selectMessages)
  const { chatId } = useParams();
  const handleAddMessage = (author,text,isBot) => {
    const newMsg = {
      author,
      text,
      isBot,
      id: `msgId_${Date.now()}`,
    }
    addMessage(chatId, newMsg)
   };

  useEffect(() => {
    const bot = {
      author: "Robot",
      text: "Hello",
      isBot: true
    }

    let timeout;

    if (messages[chatId]?.[messages[chatId]?.length - 1]?.isBot === false) {
      timeout = setTimeout(() => {
        handleAddMessage(bot.author,bot.text,bot.isBot,)
      }, 1000);
    }
    return () => {
      clearTimeout(timeout)
    }
  },[messages]);

  if(!messages[chatId]){
    return <Navigate to="/chats" replace />
  }

  return (<>
        <Message messages={messages[chatId]}></Message>
        <Form onSubmit={handleAddMessage}></Form></>
        )
};
