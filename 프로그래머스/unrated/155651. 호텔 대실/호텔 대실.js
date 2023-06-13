function formatMinutes (time) {
    const [h, m] = time.split(":").map(Number);
    return h * 60 + m
}

function solution(book_time) {
    book_time.sort((a,b) => formatMinutes(a[0]) - formatMinutes(b[0]))
    const in_books = [];
    
    for (let i=0; i<book_time.length; i++) {
        if (in_books.length === 0) {
            in_books.push(book_time[i]);
            continue;
        };
        
        const [new_book_start, new_book_end] = book_time[i];
        
        for (let j=0; j<in_books.length; j++) {
            const [in_book_start, in_book_end] = in_books[j];
            
            if (formatMinutes(in_book_end) + 10 <= formatMinutes(new_book_start)) {
                in_books.splice(j, 1);
                break;
            };
        }
        
        in_books.push(book_time[i]);
    }
    
    return in_books.length;
}