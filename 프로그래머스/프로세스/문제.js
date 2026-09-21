// Max로 가장 큰 값을 구해둔다. 3이겠지
// priorities를 map으로 순회하여 "숫자-인덱스" 형태로 만든다.
// priorities를 앞에서 하나씩 꺼낸다. 
// split[0] Number 값이 Max랑 같은가? -> NO -> 가장 뒤로 보냄
// split[0] Number 값이 Max랑 같은가? -> YES -> 인덱스(숫자)가 location과 같은가? 
// -> YES count 1 증가 종료 후 count 반환
// -> NO count 1 증가, Max 재계산 countinue; 
function solution(priorities, location) {
   let max = Math.max(...priorities);
   let list = priorities.map((item, index) => `${item}-${index}`);
   let count = 0;
    while (list.length > 0) {
        const item = list.shift();
        const value = Number(item.split('-')[0]);
        const index = Number(item.split('-')[1]);
        if (max !== value) {
            list.push(item);
        } else if(location === index) {
            count++;
            break;
        } else {
            count++;
            max = Math.max(...list.map((item) => Number(item.split('-')[0])))
        }
    }

    return count;
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
