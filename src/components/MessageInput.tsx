import React, { useState } from 'react';
import { addMessage } from '../aws/dynamodb';

const MessageInput: React.FC = () => {
    const [message, setMessage] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (message.trim()) {
            await addMessage({ content: message });
            setMessage('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={message}
                onChange={handleInputChange}
                placeholder="Type your message here"
                required
            />
            <button type="submit">Send</button>
        </form>
    );
};

export default MessageInput;