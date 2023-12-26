/* Write your PL/SQL query statement below */
select 
    round(count(case when order_date = customer_pref_delivery_date then 1 end) / count(*) * 100, 2)
        as immediate_percentage
from (
    select 
        del.*
        , rank() over(partition by customer_id order by order_date) as orderDateRank
    from delivery del
)
where orderDateRank = 1