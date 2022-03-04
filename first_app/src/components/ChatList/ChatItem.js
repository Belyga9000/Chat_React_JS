import React from 'react'
import { ListItem } from '@mui/material'
import { Link } from 'react-router-dom'
import { DeleteChat } from './DeleteChat'

export const ChatItem = ({ chat, onDeleteChat }) => {
  return (
        <ListItem className="Chat-list__item">
            <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
                <DeleteChat id={chat.id} onClick={onDeleteChat} />
        </ListItem> 
  )
}
