export function arrayToObject(array: any[]): object | any {
    const object: object | any = {};

    array.map((data) => {
        object[data.name] = data.value;
    });

    return object;
}
