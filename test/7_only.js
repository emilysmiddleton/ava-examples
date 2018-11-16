"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
ava_1.default.only('test 1', t => {
    t.is(1 + 2, 3);
});
ava_1.default('test 2', t => {
    t.is(1 + 2, 3);
});
ava_1.default('test 3', t => {
    t.is(1 + 2, 3);
});
//# sourceMappingURL=7_only.js.map