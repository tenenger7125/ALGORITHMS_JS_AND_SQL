/* Write your PL/SQL query statement below */
select 
    t1.id
    , case
        when max(t1.p_id) is null then 'Root'
        when max(t1.p_id) is not null and max(t2.p_id) is not null then 'Inner'
        else 'Leaf'
    end as type
from tree t1
    left join tree t2
        on t1.id = t2.p_id
group by t1.id