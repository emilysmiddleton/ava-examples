import test from 'ava';
import { add, multiply } from '../src/functions';

/**
 * Use plan to make sure your test is asserting everything it intends to.
 */
test('Two assertions', async t => {
    t.plan(2);

    t.is(add(2, 3), 5);
    t.is(multiply(2, 3), 6);
});

/**
 * See https://github.com/avajs/ava/blob/master/docs/recipes/when-to-use-plan.md
 */
