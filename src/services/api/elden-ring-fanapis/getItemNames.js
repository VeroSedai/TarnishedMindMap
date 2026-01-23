import { GraphQLClient } from 'graphql-request';
import { QUERIES } from '../../../queries/queries';

import { API_CONFIG } from '../../../config/apiConfig';

const client = new GraphQLClient(API_CONFIG.ENDPOINT);

export const fetchItemNames = async (type) => {
  try {
      const response = await client.request(QUERIES[type].allNames);
      const results = response[type];

      const uniqueNames = [...new Set(results.map(item => item.name))];
      return uniqueNames; 
  } catch (error) {
      console.error('Errore nel recupero dei dati:', error);
      throw error; 
  }
};

  export default fetchItemNames;