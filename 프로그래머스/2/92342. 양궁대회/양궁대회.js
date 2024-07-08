function solution(n, info) {
    let answer = [-1];
    let maxDiff = 0;

    const dfs = (arrows, scoreDiff, idx, lionInfo) => {
        if (arrows < 0) return;
        if (idx > 10) {
            if (scoreDiff > maxDiff) {
                lionInfo[10] = arrows;
                maxDiff = scoreDiff;
                answer = lionInfo.slice();
            }
            return;
        }
        const temp = lionInfo.slice();
        temp[10 - idx] = info[10 - idx] + 1;
        dfs(arrows - temp[10 - idx], scoreDiff + idx, idx + 1, temp);
        dfs(arrows, scoreDiff - (info[10 - idx] > 0 ? idx : 0), idx + 1, lionInfo);
    };

    dfs(n, 0, 0, new Array(11).fill(0));
    return answer;
}
