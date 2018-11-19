import test from 'ava';
import { slowAdd } from '../src/functions';

test('slow test 1', async t => {
    const result: Promise<number> = slowAdd(2, 2);
    t.is(await result, 4);
});

test('slow test 2', async t => {
    const result: Promise<number> = slowAdd(1, 3);
    t.is(await result, 4);
});

test('slow test 3', async t => {
    const result: Promise<number> = slowAdd(2, 4);
    t.is(await result, 6);
});

test('slow test 4', async t => {
    const result: Promise<number> = slowAdd(1, 5);
    t.is(await result, 6);
});