/* Write your PL/SQL query statement below */
select customer_id
from (
    select *
    from customer
    group by customer_id, product_key
)
group by customer_id
having count(*) = (select count(*) from product)