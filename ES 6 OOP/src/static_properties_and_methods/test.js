import { StaticMethod } from '/src/static_properties_and_methods/methods.js';
import { StaticProperty } from '/src/static_properties_and_methods/properties.js';

export class Test {
    static test() {
        /** ### Static methods test ### */
        let mtd = new StaticMethod();
        try {
            mtd.staticMethod();
            console.log('Will never go this far');
        }
        catch(e)
        {
            console.log('mtd.staticMethod() --- Since "staticMethod() is invoked from instance with name "mtd", it is not fould and throws an error');
        }
        console.log('StaticMethod.staticMethod() --- Should return a value: ' + StaticMethod.staticMethod());

        console.info("---------------------------------------");
        /** ### Static property test ### */
        let prop = new StaticProperty("id", 'dummy text');
        console.log("prop.bla --- should return undefined because it is a statis property invoked from instance");
        console.log("StaticProperty.bla returns --- " + StaticProperty.bla);
    }
}