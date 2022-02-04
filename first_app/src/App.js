import './App.css';
import { ChatList } from './components/ChatList/ChatList';
import { MessageList } from './components/MessageList/MessageList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ChatList  />
        <MessageList className="Message-list" />
      </header>
    </div>
  );
}

export default App;
