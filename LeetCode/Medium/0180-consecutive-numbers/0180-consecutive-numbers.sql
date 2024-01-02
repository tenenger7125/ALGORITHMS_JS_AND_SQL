/* Write your PL/SQL query statement below */
select num as ConsecutiveNums
from (
    select 
        num
        , lead(num, 1) over(order by id) as next_1_num
        , lead(num, 2) over(order by id) as next_2_num
    from logs
)
where (next_1_num is not null or next_2_num is not null)
    and (num = next_1_num and next_1_num = next_2_num)
group by num