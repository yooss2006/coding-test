// 일단 고를 수 있느 폰켓몬 수를 n에 넣는다. [3, 1, 2, 3] 기준 2
// 폰켓몬을 Set으로 중복을 없애면  [3, 1, 2]
// 중복을 없앤 폰켓몬 Set 크기가 n보다 크거나 같으면 n을 반환, n이 더 크면 폰캣몬 Set 크기를 반환

function solution(nums) {
    const n = nums.length / 2;
    const uniqueItems = new Set(nums);
    const uniqueItemsSize = uniqueItems.size;
    return uniqueItemsSize >= n ? n : uniqueItemsSize;
}

console.log(solution([3, 1, 2, 3]));
console.log(solution([3, 3, 3, 2, 2, 4]));
console.log(solution([3, 3, 3, 2, 2, 2]));
