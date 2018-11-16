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
function divide(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject('Can not divide by zero');
        }
        else {
            resolve(a / b);
        }
    });
}
ava_1.default('integer division works', (t) => __awaiter(this, void 0, void 0, function* () {
    const result = divide(6, 2);
    t.is(yield result, 3);
}));
ava_1.default('can not divide by zero', (t) => __awaiter(this, void 0, void 0, function* () {
    const result = divide(6, 0);
    const error = yield t.throws(result);
    t.is(error, 'Can not divide by zero');
}));
//# sourceMappingURL=2_promises.js.map