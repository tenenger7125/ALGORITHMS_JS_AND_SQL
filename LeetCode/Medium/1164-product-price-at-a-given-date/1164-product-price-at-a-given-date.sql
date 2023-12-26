/* Write your PL/SQL query statement below */
-- table에서 나온 모든 product_id가 있어야한다.

select
    distinct prod.product_id
    , nvl(cte.new_price, 10) as price
from products prod
    left join (
        select
            product_id, new_price
            , rank() over(partition by product_id order by change_date desc) as dateOrder
        from products
        where to_char(change_date, 'YYYY-MM-DD') <= '2019-08-16'
    ) cte on cte.dateOrder = 1 and prod.product_id = cte.product_id


