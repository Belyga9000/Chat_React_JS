import React, { useEffect, useState } from 'react';
import './MessageList.scss'
import { Message } from '../Message/Message';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectMessages } from '../../store/messages/selectors';
import { addMessageWithThunk } from '../../store/messages/actions';
import { FormContainer } from '../Form/FormContainer';
import { onChildAdded, onValue, push } from 'firebase/database';
import { getMessageListRefByChatId, getMessagesRefByChatId } from '../../services/firebase';

export const MessageList = () => {
  
  const dispatch = useDispatch();

  // const messages = useSelector(selectMessages)
  const [messages,setMessages] = useState([]);
  const { chatId } = useParams();
  
  const handleAddMessage = (author,text,isBot) => {
    const newMsg = {
      author,
      text,
      isBot,
      id: `msgId_${Date.now()}`,
    }
    // dispatch(addMessageWithThunk(chatId,newMsg))
    push(getMessageListRefByChatId(chatId), newMsg)
  };

  useEffect(() => {
    const unsubscribe = onValue(
      getMessagesRefByChatId(chatId),
      (snapshot) => {
        if(!snapshot.val()?.empty) {
          setMessages(null)
        }
      })
    return unsubscribe;
  }, [chatId])

  useEffect(() => {
  const unsubscribe = onChildAdded(
    getMessageListRefByChatId(chatId),
    (snapshot) => {
      setMessages((prevMessages) => 
      [...prevMessages, snapshot.val()])
    })
    return unsubscribe;
  }, [chatId])

  // if(!messages[chatId]){
    if(!messages){
    return <Navigate to="/chats" replace />
  }

  return (<>
        <Message messages={messages}></Message>
        <FormContainer onSubmit={handleAddMessage}></FormContainer></>
        )
};
