import { gql } from 'apollo-server-express';

export default gql`
   type Location{
        Type: String,
        Coordinates: [Float]
   }
`;