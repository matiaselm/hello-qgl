'use strict';
import { gql } from 'apollo-server-express';

export default gql`
   type Level {
        Title: String,
        Comments: String,
        IsFastChargeCapable: Boolean,
    }
`;