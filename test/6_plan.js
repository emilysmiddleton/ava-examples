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
const Config = require("config");
function wrap(input1, input2) {
    if (Config.get('version') === '1') {
        return { foo: input1, dog: input2 };
    }
    else {
        return { foo: input1, cat: input2 };
    }
}
ava_1.default('Sets dog or cat', (t) => __awaiter(this, void 0, void 0, function* () {
    t.plan(2);
    const wrapped = wrap(3, 6);
    t.is(wrapped.foo, 3);
    if (wrapped.dog) {
        t.is(wrapped.dog, 6);
    }
    if (wrapped.cat) {
        t.is(wrapped.cat, 6);
    }
}));
//# sourceMappingURL=6_plan.js.map