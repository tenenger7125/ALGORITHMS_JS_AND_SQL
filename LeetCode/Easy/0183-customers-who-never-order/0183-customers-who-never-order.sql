/* Write your PL/SQL query statement below */
select cstm.name as customers
from customers cstm
    left join orders ordr
        on cstm.id = ordr.customerId
where ordr.id is null