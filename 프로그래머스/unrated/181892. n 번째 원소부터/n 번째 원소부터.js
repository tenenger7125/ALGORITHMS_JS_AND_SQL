function solution(num_list, n) {
    return num_list.filter((_, idx) => idx + 1 >= n);
}