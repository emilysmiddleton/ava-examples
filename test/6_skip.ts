import test from 'ava';
import { add, slowAdd } from '../src/functions';

/**
 * Tests can be skipped, e.g. while they are WIP
 * or if it's just one test slowing you down
 */
test.skip('test 1', async t => {
    const sum: number = await slowAdd(1, 2);
    t.is(sum, 3);
});

test('test 2', t => {
    const sum: number = add(1, 2);
    t.is(sum, 3);
});

test('test 3', t => {
    const sum: number = add(1, 2);
    t.is(sum, 3);
});
