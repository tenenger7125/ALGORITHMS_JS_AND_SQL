select 
    case
        when concated_name_category like '%front%' and concated_name_category like '%python%' then 'A'
        when concated_name_category like '%c#%' then 'B'
        when concated_name_category like '%front%' then 'C'
    end as grade
    , cte.id
    , cte.email
from (
    select 
        dp.id
        , dp.email
        , group_concat(distinct name, concat(' ', category)) as concated_name_category
    from developers dp
        inner join skillcodes sc
            on dp.skill_code & sc.code
    group by dp.id, dp.email
) cte
having grade is not null
order by grade, cte.id