function solution(num_list) {
    return num_list.reduce((acc, cur) => {
        let count = 0;
        
        while (cur !== 1) {
            cur = cur % 2 === 0 ? cur / 2 : (cur - 1) / 2
            count++
        }
        return acc + count
    }, 0)
}