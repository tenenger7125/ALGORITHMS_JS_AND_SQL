function solution(name, yearning, photo) {
    const schema = name.reduce((acc, cur, idx) => {
        acc[cur] = yearning[idx];
        return acc;
    }, {})
    

    return photo.map(people => people.reduce((acc, cur) => acc + (schema[cur] ?? 0), 0));
}