import { gql } from 'apollo-server-express';

export default gql`
   type Connection {
        Quantity: Number,
        ConnectionType: {
            id: String,
            FormalName: String,
            Title: String,
        },
        LevelType: {
            id: String,
            Title: String,
            Comments: String,
            IsFastChargeCapable: Boolean,
        },
    }
`;