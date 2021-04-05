import Station from '../models/station.js';

export default {
    Query: {
        stations: (parent, args) => {
            return Station.find();
        },
        station: (parent, args) => {
            return Station.findById(args.id);
        }
    },
    /*
    Mutation: {
        addAnimal: (parent, args) => {
            console.log('animalResolver, addAnimal', args); // Validation here
            const newAnimal = new Animal(args);
            return newAnimal.save();
        },
        modifyAnimal: (parent, args) => {
            console.log('animalResolver, modifyAnimal', args);
            const data = {      // Validation
                animalName: args.animalName,
                species: args.species
            };
            return Animal.findByIdAndUpdate(args.id, data);
        } 
    }*/
};
