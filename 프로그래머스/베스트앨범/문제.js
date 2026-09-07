function solution(genres, plays) {
    const obj = genres.reduce((total, cur, index) => { 
        return { ...total, 
            [cur] : {
                key: cur,
                value: [...(total?.[cur]?.value || []), `${plays[index]}-${index}`],
                sum: (total?.[cur]?.sum || 0) + plays[index]
            }
        }
    }, {});
    for (const el in obj) {
        obj[el].value.sort((a, b) => {
            const [playA, indexA] = a.split('-');
            const [playB, indexB] = b.split('-');
            if (playA === playB) indexA - indexB;
            return playB - playA;
        });
    }

    return Object.values(obj).sort((a, b) => b.sum - a.sum).map(({ value }) => {
        return value.slice(0, 2).map((item) => Number(item.split('-')[1]));
    }).flat();
}

console.log(solution(["classic", "pop", "classic", "classic", "pop", "classic"], [500, 600, 150, 800, 2500, 500]));
