/* Write your PL/SQL query statement below */
select sp.name
from salesperson sp
where sales_id not in (
    select sales_id
    from orders od
        left join company cp
            on od.com_id = cp.com_id
    where cp.name = 'RED'
)