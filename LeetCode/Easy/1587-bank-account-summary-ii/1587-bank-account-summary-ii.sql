/* Write your PL/SQL query statement below */
select users.name, sum(trans.amount) as balance
from users 
    left join transactions trans
        on users.account = trans.account
group by users.account, users.name
having sum(trans.amount) > 10000