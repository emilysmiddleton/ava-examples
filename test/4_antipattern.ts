import test from 'ava';
import * as Config from 'config';
import { delay } from './_utils';

class Counter {
    count: number = 0;
    reset() {
        this.count = 0;
    }
    increment() {
        this.count++;
    }
}

const counter: Counter = new Counter();

test('increment increases count by 1', async t => {
    counter.increment();
    t.is(1, counter.count);
    if (Config.get<boolean>('delay')) { await delay(); }
    counter.increment();
    t.is(2, counter.count);
    counter.increment();
    t.is(3, counter.count);
});

test('reset sets count to 0', async t => {
    counter.reset();
    t.is(0, counter.count);
});
