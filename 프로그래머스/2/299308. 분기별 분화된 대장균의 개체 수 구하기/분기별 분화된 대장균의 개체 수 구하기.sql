# 1-3: 1Q, 4-6: 2Q, 7-9: 3Q, 10-12: 4Q

select
    quarter
    , count(*) as ecoli_count
from (
    select 
        *
        , case
            when month(differentiation_date) <= 3 then '1Q'
            when month(differentiation_date) <= 6 then '2Q'
            when month(differentiation_date) <= 9 then '3Q'
            else '4Q'
        end as quarter
    from ecoli_data
) cte
group by quarter