import React from 'react';
import MessageBoard from './components/MessageBoard';
import MessageInput from './components/MessageInput';

const App: React.FC = () => {
    return (
        <div>
            <h1>Message Board</h1>
            <MessageInput />
            <MessageBoard />
        </div>
    );
};

export default App;