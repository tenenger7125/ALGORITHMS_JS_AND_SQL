/* Write your PL/SQL query statement below */
select 
    name
    , nvl(sum(distance), 0) as travelled_distance
from users
    left join rides
        on users.id = rides.user_id
group by user_id, name
order by travelled_distance desc, name