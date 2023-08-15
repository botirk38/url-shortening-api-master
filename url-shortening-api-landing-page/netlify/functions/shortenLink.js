const axios = require('axios');

exports.handler = async (event, context) => {
    const { url } = JSON.parse(event.body);

    const API_ENDPOINT = `https://api.shrtco.de/v2/shorten?url=${url}`;

    try {
        const response = await axios.get(API_ENDPOINT);
        return {
            statusCode: 200,
            body: JSON.stringify(response.data),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
