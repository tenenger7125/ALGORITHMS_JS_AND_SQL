/* Write your PL/SQL query statement below */
select 
    user_id as buyer_id
    , to_char(join_date, 'YYYY-MM-DD') as join_date
    , count(order_id) as orders_in_2019
from users
    left join orders
        on users.user_id = orders.buyer_id and to_char(order_date, 'YYYY') = '2019'
group by user_id, join_date