import React from 'react';
import './MessageList.scss'
import { Message } from '../Message/Message';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectMessages } from '../../store/messages/selectors';
import { addMessageWithThunk } from '../../store/messages/actions';
import { FormContainer } from '../Form/FormContainer';

export const MessageList = () => {
  
  const dispatch = useDispatch();

  const messages = useSelector(selectMessages)
  const { chatId } = useParams();
  
  const handleAddMessage = (author,text,isBot) => {
    const newMsg = {
      author,
      text,
      isBot,
      id: `msgId_${Date.now()}`,
    }
    dispatch(addMessageWithThunk(chatId,newMsg))
   };

  if(!messages[chatId]){
    return <Navigate to="/chats" replace />
  }

  return (<>
        <Message messages={messages[chatId]}></Message>
        <FormContainer onSubmit={handleAddMessage}></FormContainer></>
        )
};
