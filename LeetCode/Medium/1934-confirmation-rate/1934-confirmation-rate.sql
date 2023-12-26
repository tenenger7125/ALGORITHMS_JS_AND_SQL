/* Write your PL/SQL query statement below */
select 
    signups.user_id
    , round(sum(case when confs.action = 'confirmed' then 1 else 0 end) / count(*), 2) as confirmation_rate
from signups
    left join confirmations confs
        on signups.user_id = confs.user_id
group by signups.user_id