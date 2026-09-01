// clothes를 순회하며 map.set(clothing[1], [...(map.get(clothing[1]) || []), clothing[0]])로 값을 저장한다.
// 

function solution(clothes) {
    const clothesMap = new Map();
    clothes.forEach(([name, type]) => {
        clothesMap.set(type, [...(clothesMap.get(type) || []), name]);
    });

    return [...clothesMap.values()]
    .reduce((total, items) => total * (items.length + 1), 1) - 1;
}

console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]));
console.log(solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]));
