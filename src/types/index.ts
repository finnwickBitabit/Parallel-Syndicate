export interface Message {
    id: string;
    content: string;
    createdAt: string;
    userId: string;
}

export interface User {
    id: string;
    username: string;
}