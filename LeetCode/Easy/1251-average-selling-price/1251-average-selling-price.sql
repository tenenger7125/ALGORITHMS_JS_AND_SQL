/* Write your PL/SQL query statement below */
select 
    pri.product_id
    , nvl(round(sum(pri.price * units) / sum(units), 2), 0) as average_price
from prices pri
    left join unitssold sold
        on sold.product_id = pri.product_id and sold.purchase_date between pri.start_date and pri.end_date
group by pri.product_id