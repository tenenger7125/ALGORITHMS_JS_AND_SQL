/* Write your PL/SQL query statement below */
select prod.product_id, prod.product_name
from product prod
    inner join sales sal
        on prod.product_id = sal.product_id
group by prod.product_id, prod.product_name
having count(case when sal.sale_date < '2019-01-01' or sal.sale_date > '2019-03-31' then 1 end) = 0
