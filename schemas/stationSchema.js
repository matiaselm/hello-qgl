import { gql } from 'apollo-server-express';

export default gql`
   extend type Query {
     stations: [Station]
     station(id: ID!): Station
   }
   
   type Station {
        id: String,
        Title: String,
        Town: String,
        AddressLine: String,
        StateOrProvince: String,
   }
`;

/*        Location:{
            type: String,
            coordinates: [Number, Number],
        },
        Connections: [{
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
        }] */
