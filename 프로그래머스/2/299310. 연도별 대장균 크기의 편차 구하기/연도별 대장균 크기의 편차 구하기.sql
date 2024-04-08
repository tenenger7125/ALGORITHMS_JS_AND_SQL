select cte.year as YEAR, cte.max_size_of_colony - cte.size_of_colony as YEAR_DEV, cte.id as ID
from (
    select
        YEAR(DIFFERENTIATION_DATE) as year
        , max(SIZE_OF_COLONY) over(partition by YEAR(DIFFERENTIATION_DATE)) as max_size_of_colony
        , size_of_colony
        , id
    from ecoli_data
) cte
order by cte.year, cte.max_size_of_colony - cte.size_of_colony