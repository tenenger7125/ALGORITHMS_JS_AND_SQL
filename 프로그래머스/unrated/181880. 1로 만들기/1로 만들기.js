function solution(num_list) {
    return num_list.reduce((acc, cur) => acc + cur.toString(2).length - 1, 0)
}