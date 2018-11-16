export function delay(): Promise<any> {
    return new Promise(resolve => setTimeout(resolve, 1000));
}
