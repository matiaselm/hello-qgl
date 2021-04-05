'use strict';
import {gql} from 'apollo-server-express';

export default gql`
    extend type Query {
        CurrentTypes: [CurrentType]
    }
    
    type CurrentType {
        id: ID
        Description: String
        Title: String    
    }
`;