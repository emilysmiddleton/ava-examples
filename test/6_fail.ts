import test from 'ava';
import { power } from '../src/functions';

/**
 * If a test is known not to pass, it can be marked as such.
 * This can be useful for TDD - write the tests first, and
 * mark as failing so they can be committed without breaking
 * the build.
 *
 * This is better than skip, because you'll be informed when
 * the test is fixed.
 */
test.failing('test 2', t => {
    const sum: number = power(2, 3);
    t.is(sum, 8);
});