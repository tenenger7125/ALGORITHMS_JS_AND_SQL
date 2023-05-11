function solution(n) {
    return Array.from({length: n}, (_, colIdx) => Array.from({length: n}, (_, rowIdx) => colIdx === rowIdx ? 1 : 0))
}