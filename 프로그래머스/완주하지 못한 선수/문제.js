// 접근 : completion을 하나씩 순회하며 꺼내 participant 배열에서 찾는다.
// 찾은 경우 participant에서 그 값을 제거, 다시 순회를 반복한다.
// completion가 없어지면  participant 배열은 하나의 요소만 남는다.
// participant[0]을 반환한다.
// 이 방법은 시간 초과가 발생한다.
// function solution(participant, completion) {
//     for (const c of completion) {
//         const index = participant.findIndex((p) => p === c);

//         if(index > -1) {
//             participant.splice(index, 1);
//         }
//     }

//     return participant[0];
// }

// 접근 : participant, completion 각각을 정렬, 
// while로 반복을 하며 두 배열을 index 0 부터 차례대로 비교한다. 차이가 발생하지 않으면 index를 1 늘린다.
// 차이가 발생하면  반복을 종료하며 participant[index]를 반환한다.


function solution(participant, completion) {
    let index = 0;
    participant.sort();
    completion.sort();

    while (participant[index] === completion[index]) {
        index ++;
    }

    return participant[index];
}


console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]));
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));
