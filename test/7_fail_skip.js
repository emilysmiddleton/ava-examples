"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
function add(_a, _b) {
    return 0;
}
ava_1.default.skip('test 1', t => {
    const sum = add(1, 2);
    t.is(sum, 3);
});
ava_1.default.failing('test 2', t => {
    const sum = add(1, 2);
    t.is(sum, 3);
});
//# sourceMappingURL=7_fail_skip.js.map