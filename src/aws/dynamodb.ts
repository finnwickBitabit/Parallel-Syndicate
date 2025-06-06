import AWS from 'aws-sdk';

const dynamoDB = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = 'YourDynamoDBTableName'; // Replace with your actual table name

export const fetchMessages = async () => {
    const params = {
        TableName: TABLE_NAME,
    };

    try {
        const data = await dynamoDB.scan(params).promise();
        return data.Items;
    } catch (error) {
        console.error("Error fetching messages: ", error);
        throw new Error("Could not fetch messages");
    }
};

export const addMessage = async (message) => {
    const params = {
        TableName: TABLE_NAME,
        Item: message,
    };

    try {
        await dynamoDB.put(params).promise();
    } catch (error) {
        console.error("Error adding message: ", error);
        throw new Error("Could not add message");
    }
};