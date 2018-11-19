import test from 'ava';
import { Counter, delay } from '../src/functions';

test.beforeEach(async t => {
    t.context.counter = new Counter();
});

test('increment increases count by 1', async t => {
    const counter = t.context.counter;
    counter.increment();
    t.is(1, counter.count);
    await delay();
    counter.increment();
    t.is(2, counter.count);
    counter.increment();
    t.is(3, counter.count);
});

test('reset sets count to 0', async t => {
    const counter = t.context.counter;
    counter.reset();
    t.is(0, counter.count);
});
