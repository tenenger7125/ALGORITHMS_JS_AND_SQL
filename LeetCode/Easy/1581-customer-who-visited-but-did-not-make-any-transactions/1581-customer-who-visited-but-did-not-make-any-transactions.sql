/* Write your PL/SQL query statement below */
select vist.customer_id, count(*) as count_no_trans 
from visits vist
    left join transactions trans
        on vist.visit_id = trans.visit_id
where transaction_id is null
group by vist.customer_id