/**
 * Example usage: "StaticMethod.staticMethod()" - will return the desired data
 * Using "<objectInstance>.staticMethod()" - will return undefined
 */
export class StaticMethod {

    visibleFromAnywhereMethod() {
        return 'I am visible from anywhere';
    }

    // this is a "static method" and it is not visible from instances.
    static staticMethod() {
        return 'I am visible only when invoked as statis method';
    }
}
