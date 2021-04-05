import { gql } from 'apollo-server-express';

export default gql`
   type LevelType {
        id: ID,
        title: String,
        comments: String,
        isFastChargeCapable: Boolean,
    }
`;