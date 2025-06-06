# Message Board Application

This is a simple message board application built with React and TypeScript that integrates with AWS DynamoDB for storing and retrieving messages.

## Features

- Users can input new messages through a form.
- Messages are displayed in a list format.
- Messages are stored in and retrieved from an AWS DynamoDB table.

## Technologies Used

- React
- TypeScript
- AWS DynamoDB
- Jest for testing

## Project Structure

```
message-board-app
├── public
│   └── index.html          # Main HTML file for the React application
├── src
│   ├── components          # Contains React components
│   │   ├── MessageBoard.tsx
│   │   └── MessageInput.tsx
│   ├── aws                 # AWS related functions
│   │   └── dynamodb.ts
│   ├── App.tsx             # Main application component
│   ├── index.tsx           # Entry point for the React application
│   └── types               # TypeScript types and interfaces
│       └── index.ts
├── __tests__               # Contains Jest tests
│   ├── MessageBoard.test.tsx
│   └── MessageInput.test.tsx
├── package.json            # npm configuration file
├── tsconfig.json           # TypeScript configuration file
└── README.md               # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd message-board-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up AWS DynamoDB:
   - Create a DynamoDB table for storing messages.
   - Update the `dynamodb.ts` file with your AWS credentials and table name.

4. Start the application:
   ```
   npm start
   ```

5. Run tests:
   ```
   npm test
   ```

## Usage

- Navigate to the application in your browser.
- Use the input form to submit new messages.
- View the list of messages displayed on the message board.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.