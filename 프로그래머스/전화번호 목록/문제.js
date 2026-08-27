// 정렬하면 12, 123, 1235 이런식으로 비슷한수끼리 묶여 정렬된다.
// 정렬 이후 한번만 순회하여 바로 다음꺼에 포함된다면 false, 아니면 true

function solution(phone_book) {
    var answer = true;
    phone_book.sort();

    for (let i = 0; i < phone_book.length - 1; i++) {
        if (phone_book[i + 1].startsWith(phone_book[i])) {
            answer = false;
        }
    }

    return answer;
}

console.log(solution(["119", "97674223", "1195524421"]));
console.log(solution(["123", "456", "789"]));
console.log(solution(["12", "123", "1235", "567", "88"]));
