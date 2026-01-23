import { gql } from 'graphql-request';


import { API_CONFIG } from '../config/apiConfig';

export const QUERIES = API_CONFIG.RESOURCES.reduce((acc, resource) => {
  acc[resource] = {
    allNames: gql`
      query {
        ${resource}(limit: -1) {
          name
        }
      }
    `,
    details: gql`
      query SearchItems($name: String!) {
        ${resource}(name: $name) {
          id
          name
          image
          description
        }
      }
    `,
  };
  return acc;
}, {});

