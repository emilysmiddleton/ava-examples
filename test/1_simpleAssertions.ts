import test from 'ava';
import { add, parseName } from '../src/functions';
import { Name } from '../src/types';

/**
 * What's that t? It's the execution context.
 * One thing is contains the assertions.
 *
 * Use 't.is' for primitive values
 */
test('sum adds two numbers', t => {
    const sum: number = add(5, 10);
    t.is(sum, 15);
});

/**
 * Use 't.deepEqual' for objects
 */
test('parse name splits on space', t => {
    const name: Name = parseName("Jane Doe");
    t.deepEqual(name, {
        firstName: "Jane",
        surname: "Doe"
    });
});

/**
 * Various other assertions are available.
 */
test('false is truthy ¯\\_(ツ)_/¯', t => {
    t.truthy('false');
});