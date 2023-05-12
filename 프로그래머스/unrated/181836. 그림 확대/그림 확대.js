function solution(picture, k) {
    return picture.reduce((acc, cur) => {
        const kTimesRow = cur.replace(/[\.x]/g, match => match === '.' ? '.'.repeat(k) : 'x'.repeat(k))

        return [...acc, ...Array.from({length: k}, () => kTimesRow)]
    }, [])
}