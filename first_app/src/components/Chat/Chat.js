import React from 'react';
import { ChatList } from '../ChatList/ChatList';
import { MessageList } from '../MessageList/MessageList';
import "./Chat.css"

export const Chat = () => {
  return (
    <div className="Chat">
    <header className="Chat-header">
      <ChatList  />
      <MessageList className="Message-list" />
    </header>
  </div>
);
}
