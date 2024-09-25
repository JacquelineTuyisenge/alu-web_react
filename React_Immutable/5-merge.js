const {List, Map} = require('immutable');

export function concatElements(page1, page2) {
    let array = page1.concat(page2);
    return List(array);
};

export const mergeElements = (page1, page2) => {
    const map1 = Map(page1);
    const map2 = Map(page2);
    const mapMerged = map1.merge(map2);
    return List(mapMerged.valueSeq());
};