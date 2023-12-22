/* Write your PL/SQL query statement below */
select 
    to_char(trans_date, 'YYYY-MM') as month
    , country as country
    , count(trans_date) as trans_count
    , count(case when state = 'approved' then 1 end) as approved_count
    , sum(amount) as trans_total_amount
    , sum(case when state = 'approved' then amount else 0 end) as approved_total_amount
from transactions
group by to_char(trans_date, 'YYYY-MM'), country
