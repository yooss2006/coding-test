// 스택에 ( 이면 값을 추가 ) 이면 값을 뺸다.
// 만약 ) 일 떄 뺸 값이 undefined 라면 false 반환
// 끝까지 순회했을 때 스택에 값이 안남아있다면 true

function solution(s){
    const stack = [];
    for (const e of s) {
        if (e === ')') {
            const stackItem = stack.pop();
            if (!stackItem) return false;
        }

        if (e === '(') {
            stack.push(e);
        }
    }
    return stack.length === 0;
}

console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));
