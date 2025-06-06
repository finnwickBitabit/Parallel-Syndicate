import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MessageInput from '../src/components/MessageInput';
import { addMessage } from '../src/aws/dynamodb';

jest.mock('../src/aws/dynamodb');

describe('MessageInput', () => {
    beforeEach(() => {
        render(<MessageInput />);
    });

    test('renders input field and submit button', () => {
        const inputElement = screen.getByPlaceholderText(/Type your message here/i);
        const buttonElement = screen.getByRole('button', { name: /Submit/i });

        expect(inputElement).toBeInTheDocument();
        expect(buttonElement).toBeInTheDocument();
    });

    test('allows user to type in input field', () => {
        const inputElement = screen.getByPlaceholderText(/Type your message here/i);
        fireEvent.change(inputElement, { target: { value: 'Hello World' } });

        expect(inputElement.value).toBe('Hello World');
    });

    test('calls addMessage on form submission', () => {
        const inputElement = screen.getByPlaceholderText(/Type your message here/i);
        const buttonElement = screen.getByRole('button', { name: /Submit/i });

        fireEvent.change(inputElement, { target: { value: 'Hello World' } });
        fireEvent.click(buttonElement);

        expect(addMessage).toHaveBeenCalledWith('Hello World');
    });

    test('clears input field after submission', () => {
        const inputElement = screen.getByPlaceholderText(/Type your message here/i);
        const buttonElement = screen.getByRole('button', { name: /Submit/i });

        fireEvent.change(inputElement, { target: { value: 'Hello World' } });
        fireEvent.click(buttonElement);

        expect(inputElement.value).toBe('');
    });
});