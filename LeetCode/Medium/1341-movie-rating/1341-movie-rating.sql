/* Write your PL/SQL query statement below */
select name as results
from (
    select count(*) as count, u.name
    from MovieRating mr
        inner join users u
            on mr.user_id = u.user_id
    group by u.user_id, u.name
    order by count desc, u.name
)
where rownum = 1
union all
select title
from (
    select avg(mr.rating) as avg_rating, m.title
    from MovieRating mr
        inner join movies m
            on mr.movie_id = m.movie_id
    where mr.created_at >= '2020-02-01' and mr.created_at < '2020-03-01'
    group by m.movie_id, m.title
    order by avg_rating desc, m.title
)
where rownum = 1

