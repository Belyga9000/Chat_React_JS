import React from 'react';
import  {List}  from '@mui/material';
import  {ListItem}  from '@mui/material';
import  {ListItemText}  from '@mui/material';

export const Message = ({ messages }) => {
  return  (<List className="Message-list">
  {messages.map((message) =>(
     <ListItem key={message.id}  >
         <ListItemText
             className="Message-text"/>
             {message.author + ':'}
             <ListItemText 
                 className="Message-text"/>
                 {message.text}
         </ListItem>))}
 </List>)
};
