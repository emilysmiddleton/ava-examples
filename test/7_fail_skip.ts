import test from 'ava';

function add(_a: number, _b: number): number {
    return 0;
}

/**
 * Tests can be skipped while they are WIP.
 */
test.skip('test 1', t => {
    const sum: number = add(1, 2);
    t.is(sum, 3);
});

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
    const sum: number = add(1, 2);
    t.is(sum, 3);
});