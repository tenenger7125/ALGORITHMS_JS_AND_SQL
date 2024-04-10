select
    cte.id
    , case
        when size_percentage / total * 100 <= 25 then 'CRITICAL'
        when size_percentage / total * 100 <= 50 then 'HIGH'
        when size_percentage / total * 100 <= 75 then 'MEDIUM'
        else 'LOW'
    end as colony_name
from (
    select
        ed.id
        , rank() over(order by ed.size_of_colony desc) as size_percentage
        , (select count(*) from ecoli_data ed) as total
    from ecoli_data ed
) cte
order by cte.id