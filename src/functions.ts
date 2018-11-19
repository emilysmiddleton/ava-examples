import { Name } from './types';

/**
 * Simple pure function, dealing with only primitives.
 */

export function add(a: number, b: number): number {
    return a + b;
}

/**
 * Pure function, but returning an object.
 */
export function parseName(name: string): Name {
    const parts: string[] = name.split(" ");
    return {
        firstName: parts[0],
        surname: parts[1]
    };
}

/**
 * Asynchronous function, returning a promise.
 */
export async function divide(a: number, b: number): Promise<number> {
    return new Promise<number>((resolve, reject) => {
        if (b === 0) {
            reject('Can not divide by zero');
        }
        else {
            resolve(a / b);
        }
    });
}

export async function slowAdd(a: number, b: number): Promise<number> {
    console.log(`About to add ${a} and ${b}`);
    await delay();
    const sum: number = a + b;
    console.log(`${a} + ${b} = ${sum}`);
    return new Promise<number>((resolve, _reject) => resolve(sum));
}

export function delay(): Promise<any> {
    return new Promise(resolve => setTimeout(resolve, 1000));
}

export class Counter {
    count: number = 0;
    reset() {
        this.count = 0;
    }
    increment() {
        this.count++;
    }
}

export function multiply(a: number, b: number): number {
    return a * b;
}

export function power(_a: number, _b: number): number {
    return 0;
}
