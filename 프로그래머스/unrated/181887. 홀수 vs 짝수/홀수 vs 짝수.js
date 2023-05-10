function solution(num_list) {
    const {odd, even} = num_list.reduce((acc, cur, idx) => {
        Math.abs(idx % 2) === 0 ? acc.even += cur : acc.odd += cur
        return acc;
    }, {odd: 0, even: 0});
    
    return odd > even ? odd : even;
}