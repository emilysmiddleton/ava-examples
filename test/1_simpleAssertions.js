"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
function add(a, b) {
    return a + b;
}
function parseName(name) {
    const parts = name.split(" ");
    return { firstName: parts[0], surname: parts[1] };
}
ava_1.default('primitive assertion (passing)', t => {
    const sum = add(5, 10);
    t.is(sum, 15);
});
ava_1.default('pure function returning an object', t => {
    const name = parseName("Jane Doe");
    t.deepEqual(name, { firstName: "Jane", surname: "Doe" });
});
//# sourceMappingURL=1_simpleAssertions.js.map