import test from 'ava';

type Name = { firstName: string, surname: string };

function add(a: number, b: number): number {
    return a + b;
}

function parseName(name: string): Name {
    const parts: string[] = name.split(" ");
    return { firstName: parts[0], surname: parts[1] };
}

/**
 * Use 't.is' for primitive values
 */
test('primitive assertion (passing)', t => {
    const sum: number = add(5, 10);
    t.is(sum, 15);
});

/**
 * Use 't.deepEqual' for objects
 */
test('pure function returning an object', t => {
    const name: Name = parseName("Jane Doe");
    t.deepEqual(name, { firstName: "Jane", surname: "Doe" });
});