import test from 'ava';
import { slowAdd } from '../src/functions';

test('slow test 1', async t => {
    t.log('Slow test 1');
    const result: Promise<number> = slowAdd(2, 2);
    t.is(await result, 4);
});

test('slow test 2', async t => {
    t.log('Slow test 2');
    const result: Promise<number> = slowAdd(1, 3);
    t.is(await result, 4);
});

test('slow test 3', async t => {
    t.log('Slow test 3');
    const result: Promise<number> = slowAdd(2, 4);
    t.is(await result, 6);
});

test('slow test 4', async t => {
    t.log('Slow test 4');
    const result: Promise<number> = slowAdd(1, 5);
    t.is(await result, 6);
});