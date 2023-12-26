/* Write your PL/SQL query statement below */

select
    contest_id
    , round(count(contest_id) / (select count(*) from users) * 100, 2) as percentage
from users
    left join register
        on users.user_id = register.user_id
group by contest_id
having contest_id is not null
order by percentage desc, contest_id