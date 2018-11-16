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
function add(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}
const testInput = [
    { a: 1, b: 2, sum: 3, product: 2 },
    { a: 2, b: 3, sum: 5, product: 6 },
    { a: 3, b: 4, sum: 7, product: 12 },
    { a: 4, b: 5, sum: 9, product: 20 },
    { a: 5, b: 6, sum: 11, product: 30 },
    { a: 6, b: 7, sum: 13, product: 42 }
];
for (const input of testInput) {
    ava_1.default(`${input.a} + ${input.b} = ${input.sum}`, (t) => __awaiter(this, void 0, void 0, function* () {
        const result = add(input.a, input.b);
        t.is(result, input.sum);
    }));
    ava_1.default(`${input.a} * ${input.b} = ${input.product}`, (t) => __awaiter(this, void 0, void 0, function* () {
        const result = multiply(input.a, input.b);
        t.is(result, input.product);
    }));
}
//# sourceMappingURL=5_generated.js.map