/* Write your PL/SQL query statement below */
select 
    to_char(sell_date, 'YYYY-MM-DD') as sell_date
    , count(*) as num_sold
    , listagg(product, ',') within group (order by product) as products
from (
    select distinct *
    from activities
)
group by to_char(sell_date, 'YYYY-MM-DD')
order by sell_date
