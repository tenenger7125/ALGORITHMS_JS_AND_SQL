/* Write your PL/SQL query statement below */
select *
from (
    select 
        requester_id as id
        , count(*) as num
    from (
        select *
        from RequestAccepted
        union 
        select accepter_id, requester_id, accept_date
        from RequestAccepted
    ) ra
    group by ra.requester_id
    order by num desc
)
where rownum = 1
