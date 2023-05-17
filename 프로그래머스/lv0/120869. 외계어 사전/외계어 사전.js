function solution(spell, dic) {
    return dic.some(word => spell.every(sp => word.includes(sp))) ? 1 : 2;
}