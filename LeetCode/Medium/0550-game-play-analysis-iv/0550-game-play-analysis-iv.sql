/* Write your PL/SQL query statement below */
select round(count(case when date2 - date1 = 1 then 1 end) / count(distinct pid1), 2) as fraction
from (
    select 
        a1.player_id as pid1
        , a1.event_date as date1
        , a2.player_id as pid2
        , a2.event_date as date2
        , rank() over(partition by a1.player_id order by a1.event_date) as connection_count
    from activity a1
        inner join activity a2
            on a1.player_id = a2.player_id
)
where connection_count = 1