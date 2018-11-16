"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const _utils_1 = require("./_utils");
function slowAdd(a, b) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`About to add ${a} and ${b}`);
        yield _utils_1.delay();
        const sum = a + b;
        console.log(`${a} + ${b} = ${sum}`);
        return new Promise((resolve, _reject) => resolve(sum));
    });
}
ava_1.default('slow test 1', (t) => __awaiter(this, void 0, void 0, function* () {
    const result = slowAdd(2, 2);
    t.is(yield result, 4);
}));
ava_1.default('slow test 2', (t) => __awaiter(this, void 0, void 0, function* () {
    const result = slowAdd(1, 3);
    t.is(yield result, 4);
}));
ava_1.default('slow test 3', (t) => __awaiter(this, void 0, void 0, function* () {
    const result = slowAdd(2, 4);
    t.is(yield result, 6);
}));
ava_1.default('slow test 4', (t) => __awaiter(this, void 0, void 0, function* () {
    const result = slowAdd(1, 5);
    t.is(yield result, 6);
}));
//# sourceMappingURL=3_parallelTest.js.map