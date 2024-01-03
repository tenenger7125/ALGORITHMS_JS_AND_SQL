function findWordsContaining(words: string[], x: string): number[] {
    return words.reduce((results, word, idx) => word.includes(x) ? [...results, idx] : results, [])
};