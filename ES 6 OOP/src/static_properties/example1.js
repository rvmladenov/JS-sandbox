export class Drone {
    constructor(id, txt) {
        // these are instance or class properties and they are used
        this._id = id || null;
        this._txt = txt || null;
    }
}
// this is a "static property" and it is not visible from instances. 
// Example usage: "Drone.bla"
// Using "drone.bla" - will return undefined
Drone.bla = 'i am not visible from class instances';