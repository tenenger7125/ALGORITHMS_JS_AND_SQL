/* Write your PL/SQL query statement below */
select person_name
from (
    select person_name, sum(weight) over(order by turn) as total_weight
    from queue
    order by total_weight desc
)
where total_weight <= 1000 and rownum = 1

