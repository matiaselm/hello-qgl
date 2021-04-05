import { gql } from 'apollo-server-express';

export default gql`
   type Connection {
        Quantity: Int,
        ConnectionType: ConnectionType,
        LevelType: LevelType,
    }
`;