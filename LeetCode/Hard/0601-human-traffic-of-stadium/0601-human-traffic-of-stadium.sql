/* Write your PL/SQL query statement below */
select id, visit_date, people
from (
    select 
        id
        , to_char(visit_date, 'YYYY-MM-DD') as visit_date
        , people
        , lag(id, 1) over(order by id) as prev_value1
        , lag(id, 2) over(order by id) as prev_value2
        , lead(id, 1) over(order by id) as post_value1
        , lead(id, 2) over(order by id) as post_value2
    from stadium
    where people >= 100
)
where 1 = case
        when prev_value1 = id - 1 and prev_value2 = id - 2 then 1
        when post_value1 = id + 1 and post_value2 = id + 2 then 1
        when prev_value1 = id - 1 and post_value1 = id + 1 then 1
    end