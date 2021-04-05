'use strict';
import { gql } from 'apollo-server-express';

export default gql`
   type Location{
        type: String,
        coordinates: [Float]
   }
`;