/* Write your PL/SQL query statement below */
select customer_number
from (
    select customer_number, count(customer_number) as count
    from orders
    group by customer_number
    order by count desc
)
where rownum = 1