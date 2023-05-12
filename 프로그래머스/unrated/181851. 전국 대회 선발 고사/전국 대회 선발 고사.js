function solution(rank, attendance) {
    return rank.map((rank, idx) => [rank, idx]).filter((_, idx) => attendance[idx]).sort((a,b) => a[0]-b[0]).slice(0, 3).reduce((acc, [_, num], idx) => {
        return acc + ((idx === 0) ? num * 10000 : (idx === 1) ? 100 * num : num);
    },0);
}