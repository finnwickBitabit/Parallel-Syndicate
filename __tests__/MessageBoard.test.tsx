import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MessageBoard from '../src/components/MessageBoard';
import * as dynamodb from '../src/aws/dynamodb';

jest.mock('../src/aws/dynamodb');

describe('MessageBoard', () => {
    const mockMessages = [
        { id: '1', content: 'Hello World' },
        { id: '2', content: 'This is a test message' },
    ];

    beforeEach(() => {
        dynamodb.fetchMessages.mockResolvedValue(mockMessages);
    });

    test('renders messages from DynamoDB', async () => {
        render(<MessageBoard />);

        const messageElements = await screen.findAllByText(/Hello World|This is a test message/i);
        expect(messageElements).toHaveLength(mockMessages.length);
    });

    test('displays a loading message while fetching', () => {
        dynamodb.fetchMessages.mockReturnValue(new Promise(() => {}));
        render(<MessageBoard />);

        expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });
});