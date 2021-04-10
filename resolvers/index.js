'use strict';
import connectionsResolver from './connectionsResolver.js';
import connectionTypesResolver from './connectionsResolver.js';
import stationsResolver from './stationsResolver.js';
import levelsResolver from './levelsResolver.js';
import currentTypesResolver from './currentTypesResolver.js';

export default [stationsResolver, connectionsResolver, connectionTypesResolver, levelsResolver, currentTypesResolver];