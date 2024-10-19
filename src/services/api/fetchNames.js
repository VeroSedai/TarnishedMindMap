import { GraphQLClient } from 'graphql-request';
import { QUERIES } from '../../queries/queries';

const client = new GraphQLClient('https://eldenring.fanapis.com/api/graphql');

export const fetchNames = async (type) => {
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

  export default fetchNames;