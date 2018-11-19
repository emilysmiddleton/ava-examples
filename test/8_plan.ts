import test from 'ava';
import * as Config from 'config';

function wrap(input1: number, input2: number ): any {
     if (Config.get<string>('version') === '1') {
         return { foo: input1, dog: input2};
     } else {
         return { foo: input1, cat: input2};
     }
}

/**
 * Use plan to make sure your test is asserting everything it intends to.
 */
test('Sets dog or cat', async t => {
    t.plan(2);

    const wrapped = wrap(3, 6);
    t.is(wrapped.foo, 3);

    if (wrapped.dog) {
        t.is(wrapped.dog, 6);
    }

    if (wrapped.cat) {
        t.is(wrapped.cat, 6);
    }
});