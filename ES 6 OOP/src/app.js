import { Drone } from '/src/static_properties/example1.js';

let drone = new Drone('A123', 'dummy txt');
console.log('Should return undefined: ' + drone.bla);
console.log('Should return a value: ' + Drone.bla);
