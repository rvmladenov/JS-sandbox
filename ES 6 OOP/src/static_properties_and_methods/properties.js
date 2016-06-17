export class StaticProperty {
    constructor(id, txt) {
        // these are instance or class properties and they are used
        this._id = id || null;
        this._txt = txt || null;
    }
}
// this is a "static property" and it is not visible from instances. 
// Example usage: "StaticProperty.bla"
// Using "<objectInstance>.bla" - will return undefined
StaticProperty.bla = 'i am not visible from class instances';