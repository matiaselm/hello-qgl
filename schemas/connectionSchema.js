import { gql } from 'apollo-server-express';

export default gql`
   type Connection {
        quantity: Int,
        ConnectionType: ConnectionType,
        LevelType: LevelType,
    }
`;