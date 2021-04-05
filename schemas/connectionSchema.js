'use strict';
import { gql } from 'apollo-server-express';

export default gql`
    type Connection {
        id: ID
        ConnectionType: ConnectionType
        Level: Level
        CurrentTypeID: CurrentType
        Quantity: Int
    }
`;