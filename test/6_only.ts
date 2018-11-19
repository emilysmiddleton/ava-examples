import test from 'ava';

test.only('test 1', t => {
    t.is(1 + 2, 3);
});

test('test 2', t => {
    t.is(1 + 2, 3);
});

test('test 3', t => {
    t.is(1 + 2, 3);
});