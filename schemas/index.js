'use strict';
import {gql} from 'apollo-server-express';
import stationSchema from './stationSchema.js';
import connectionSchema from './connectionSchema.js';
import locationSchema from './locationSchema.js';
import connectionTypeSchema from './connectionTypeSchema.js';
import levelTypeSchema from './levelTypeSchema.js';
import currentTypeSchema from './currentTypeSchema.js';

const linkSchema = gql`
   type Query {
     _: Boolean
   }
   type Mutation {
     _: Boolean
   }
`;

export default [
   linkSchema,
   stationSchema,
   connectionSchema,
   locationSchema,
   connectionTypeSchema,
   levelTypeSchema,
   currentTypeSchema
];
