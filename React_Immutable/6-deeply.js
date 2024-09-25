const { Map } = require('immutable');

export function mergeDeeplyElements(page1, page2) {
    function deepMerge(map1, map2) {
        return map1.mergeDeep(map2);
    }
    const map1 = Map(page1);
    const map2 = Map(page2);

    const mergedMap = deepMerge(map1, map2);

    return mergedMap.valueSeq().toList();
};
