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
const _utils_1 = require("./_utils");
class Counter {
    constructor() {
        this.count = 0;
    }
    reset() {
        this.count = 0;
    }
    increment() {
        this.count++;
    }
}
const counter = new Counter();
ava_1.default('increment increases count by 1', (t) => __awaiter(this, void 0, void 0, function* () {
    counter.increment();
    t.is(1, counter.count);
    if (Config.get('delay')) {
        yield _utils_1.delay();
    }
    counter.increment();
    t.is(2, counter.count);
    counter.increment();
    t.is(3, counter.count);
}));
ava_1.default('reset sets count to 0', (t) => __awaiter(this, void 0, void 0, function* () {
    counter.reset();
    t.is(0, counter.count);
}));
//# sourceMappingURL=4_antipattern.js.map