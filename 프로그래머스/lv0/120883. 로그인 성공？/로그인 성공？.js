function solution(id_pw, db) {
    const user = db.find(([id]) => id === id_pw[0]);

    return !user ? 'fail' : user[1] === id_pw[1] ? 'login' : 'wrong pw';
}