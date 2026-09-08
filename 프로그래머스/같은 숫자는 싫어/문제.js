function solution(arr) {
    var answer = [];
    for (const el of arr) {
        if (answer[answer.length - 1] === el) continue;
        answer.push(el);
    }
    return answer;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
console.log(solution([4, 4, 4, 3, 3]));
