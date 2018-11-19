import test from 'ava';
import { add, multiply } from '../src/functions';

const testName = (operator: string, input: any): string => {
    return `${input.a} ${operator} ${input.b} = ${input.sum}`;
};

const testInput = [
    { a: 1, b: 2, sum: 3, product: 2 },
    { a: 2, b: 3, sum: 5, product: 6 },
    { a: 3, b: 4, sum: 7, product: 12 },
    { a: 4, b: 5, sum: 9, product: 20 },
    { a: 5, b: 6, sum: 11, product: 30 },
    { a: 6, b: 7, sum: 13, product: 42 }
];

/**
 * Tests can be auto-generated from fixtures.
 */
for (const input of testInput) {
    test(testName('+', input), async t => {
        const result: number = add(input.a, input.b);
        t.is(result, input.sum);
    });

    test(testName('*', input), async t => {
        const result: number = multiply(input.a, input.b);
        t.is(result, input.product);
    });
}

