import React from 'react';
import { ChatList } from '../ChatList/ChatList';
import { MessageList } from '../MessageList/MessageList';
import "./Chat.scss"

export const Chat = ({ chats ,messages, onaddMessage, onDeleteChat, onAddChat }) => {
  return (
    <div className="Chat">
    <header className="Chat-header">
      <ChatList chats={chats} onDeleteChat={onDeleteChat} onAddChat={onAddChat}  />
      <MessageList messages={messages} addMessage={onaddMessage} className="Message-list" />
    </header>
  </div>
);
}
