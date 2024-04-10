select
    cte.id
    , case
        when size_percent_rank <= 0.25 then 'CRITICAL'
        when size_percent_rank <= 0.50 then 'HIGH'
        when size_percent_rank <= 0.75 then 'MEDIUM'
        else 'LOW'
    end as colony_name
from (
    select
        ed.id
        , percent_rank() over(order by ed.size_of_colony desc) as size_percent_rank
    from ecoli_data ed
) cte
order by cte.id