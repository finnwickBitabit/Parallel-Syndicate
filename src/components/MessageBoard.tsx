import React, { useEffect, useState } from 'react';
import { fetchMessages } from '../aws/dynamodb';
import MessageInput from './MessageInput';

const MessageBoard: React.FC = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const getMessages = async () => {
            const fetchedMessages = await fetchMessages();
            setMessages(fetchedMessages);
        };

        getMessages();
    }, []);

    return (
        <div>
            <h1>Message Board</h1>
            <MessageInput onMessageAdded={() => fetchMessages().then(setMessages)} />
            <ul>
                {messages.map((message) => (
                    <li key={message.id}>{message.content}</li>
                ))}
            </ul>
        </div>
    );
};

export default MessageBoard;