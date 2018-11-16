import test from 'ava';
import { delay } from './_utils';

async function slowAdd(a: number, b: number): Promise<number> {
    console.log(`About to add ${a} and ${b}`);
    await delay();
    const sum: number = a + b;
    console.log(`${a} + ${b} = ${sum}`);
    return new Promise<number>((resolve, _reject) => resolve(sum));
}

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