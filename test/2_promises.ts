import test from 'ava';
import { divide } from '../src/functions';


/**
 * Testing promises is super easy. Tests are already async,
 * so just call 'await'. If the promise rejects, the
 * test will fail.
 */
test('integer division works', async t => {
    const result: Promise<number> = divide(6, 2);
    t.is(await result, 3);
});

/**
 * If you want to test that your promise correctly
 * rejects certain input, use the built-in
 * 'throws' method.
 */
test('can not divide by zero', async t => {
    const result: Promise<number> = divide(6, 0);
    const error = await t.throws(result);
    t.is(error, 'Can not divide by zero');
});