import Location from '../models/location.js';

export default {
  Station: {
    location(parent) {
      console.log('location', parent);
      return Location.findById(parent.location);
    },
  },
};