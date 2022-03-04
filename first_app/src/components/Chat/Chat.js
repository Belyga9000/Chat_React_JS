import React from 'react';
import { useSelector } from 'react-redux';
import { selectChatList } from '../../store/chats/selectors';
import { selectMessages } from '../../store/messages/selectors';
import { ChatListContainer } from '../ChatList/ChatListContainer';
import { MessageList } from '../MessageList/MessageList';
import "./Chat.scss"

export const Chat = () => {
  
  const chatList = useSelector(selectChatList)
  const messages = useSelector(selectMessages)
  
  return (
    <div className="Chat">
    <header className="Chat-header">
      <ChatListContainer chats={chatList} />
      <MessageList messages={messages} className="Message-list" />
    </header>
  </div>
);
}
