import { GraphQLClient } from 'graphql-request';
import { QUERIES } from '../../../queries/queries';

import { API_CONFIG } from '../../../config/apiConfig';

const client = new GraphQLClient(API_CONFIG.ENDPOINT);

export const fetchItemDetails = async (itemType, val) => {
    try {
        const response = await client.request(QUERIES[itemType].details, { name: val });
        return response;
    } catch (error) {
        console.error('Error fetching item details:', error);
        throw error; 
    }
};