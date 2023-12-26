/* Write your PL/SQL query statement below */
select day, count(*) as active_users
from (
    select 
        to_char(activity_date, 'YYYY-MM-DD') as day
    from activity
    where to_char(activity_date, 'YYYY-MM-DD') <= '2019-07-27'
        and to_date('2019-07-27') - to_date(activity_date) < 30
    group by activity_date, user_id
)
group by day
order by day