/* Write your PL/SQL query statement below */
select
    prod.product_name
    , sum(ord.unit) as unit
from products prod
    inner join orders ord
        on prod.product_id = ord.product_id
where to_char(ord.order_date, 'YYYY-MM') =  '2020-02'
group by prod.product_id, prod.product_name
having sum(ord.unit) >= 100