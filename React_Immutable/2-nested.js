export default function accessImmutableObject(object, array) {
    let value = object;
    for (let i = 0; i < array.length; i++) {
        let arrayElement = array[i];

        if (value[arrayElement] === undefined) {
            return undefined;
        } else {
            value = value[arrayElement];
        }
    }
    return value;
};