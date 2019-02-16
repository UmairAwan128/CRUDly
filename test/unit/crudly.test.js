const checkFunctions = require("../checkFunctions");
const crudly = require("../../src/crudly");

test(
    "check crudly object to be valid",
    checkFunctions.check(() => {
        expect(crudly.name).toBe("crudlsady");
        expect(crudly.__proto__ === Function.prototype).toBe(true);
        expect(crudly.gate).toBeDefined();
        expect(crudly.actionConfig).toBeDefined();
        expect(crudly.standardCrudActions).toBeDefined();
        expect(Object.keys(crudly).length).toBe(3);
    })
);