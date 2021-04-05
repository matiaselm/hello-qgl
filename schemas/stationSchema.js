import { gql } from 'apollo-server-express';

export default gql`
   extend type Query {
     stations: [Station]
     station(id: ID!): Station
   }
   
   type Station {
        _id: String,
        Title: String,
        Town: String,
        AddressLine1: String,
        StateOrProvince: String,
        Location: Location,
        Connections: [Connection]
   }
`;
