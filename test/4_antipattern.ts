import test from 'ava';
import { Counter } from '../src/functions';

const counter: Counter = new Counter();

test('increment increases count by 1', async t => {
    counter.increment();
    t.is(1, counter.count);
    counter.increment();
    t.is(2, counter.count);
    counter.increment();
    t.is(3, counter.count);
});

test('reset sets count to 0', async t => {
    counter.reset();
    t.is(0, counter.count);
});
