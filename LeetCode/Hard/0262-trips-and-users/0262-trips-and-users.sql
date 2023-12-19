/* Write your PL/SQL query statement below */
with banned_users as (select * from users where banned = 'Yes')

select 
    request_at as Day
    , round(sum(case when status like '%cancelled%' then 1 else 0 end) / count(*), 2) as "Cancellation Rate"
from trips
where client_id not in (select users_id from banned_users)
    and driver_id not in (select users_id from banned_users)
    and request_at between '2013-10-01' and '2013-10-03'
group by request_at