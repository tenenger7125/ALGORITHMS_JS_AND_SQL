with recursive ecoli_tree as (
    select
        ed.id
        , ed.parent_id
        , 1 as generation
    from ecoli_data ed
    where ed.parent_id is null
    
    union all
    select ed.id, ed.parent_id, et.generation + 1
    from ecoli_data ed
        inner join ecoli_tree et
            on ed.parent_id = et.id
)

select et.id
from ecoli_tree et
where generation = 3
order by et.id