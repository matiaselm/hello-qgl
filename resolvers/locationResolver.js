import Location from '../models/location.js';

export default {
  Station: {
    Location(parent) {
      // console.log('location', parent);
      return Location.findById(parent.Location);
    },
  },
};