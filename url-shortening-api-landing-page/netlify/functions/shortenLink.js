const fetch = require('node-fetch');

exports.handler = async function(event, context) {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed'
        };
    }

    const { url } = JSON.parse(event.body);

    const API_ENDPOINT = `https://api.shrtco.de/v2/shorten?url=${url}`;

    try {
        const response = await fetch(API_ENDPOINT);
        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    }
    catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
