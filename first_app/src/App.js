import './App.css';
import { Form } from './components/Form/Form';
//import { MessageList } from './components/Message/Message';
import { useEffect, useState } from "react";

function App() {

  const [messages,setMessages] = useState([]);

  const handleAddMessage = (author,text) => {
    setMessages((prevMessages) => [...prevMessages,{author,text}]); 
  };

  useEffect(() => {
    setMessages((prevMessages) => [...prevMessages,{author: "Robot",text: "hi"}])
  },[setMessages]);

  return (
    <div className="App">
      <header className="App-header">
        {messages.map((message, index) => <div key={index}>Имя Автора: {message.author}<p key ={index}>Текст: {message.text}</p></div>)}
        <Form onSubmit={handleAddMessage}></Form>
      </header>
    </div>
  );
}

export default App;
