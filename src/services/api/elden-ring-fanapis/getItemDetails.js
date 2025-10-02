import { GraphQLClient } from 'graphql-request';
import { QUERIES } from '../../../queries/queries';

const client = new GraphQLClient('https://eldenring.fanapis.com/api/graphql');

export const fetchItemDetails = async (itemType, val) => {
    try {
        const response = await client.request(QUERIES[itemType].details, { name: val });
        return response;
    } catch (error) {
        console.error('Error fetching item details:', error);
        throw error; 
    }
};