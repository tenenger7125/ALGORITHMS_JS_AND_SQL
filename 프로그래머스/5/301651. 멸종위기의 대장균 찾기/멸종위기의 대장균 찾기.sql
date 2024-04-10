with recursive ecoli_tree as (
    select 
        ed.id
        , ed.parent_id
        , 1 as generation
    from ecoli_data ed
    where ed.parent_id is null
    
    union all
    
    select 
        ed.id
        , ed.parent_id
        , et.generation + 1
    from ecoli_data ed
        inner join ecoli_tree et
            on et.id = ed.parent_id
)

select 
    count(*) as count
    , parent_et.generation
from ecoli_tree parent_et
    left join ecoli_tree child_et
        on parent_et.id = child_et.parent_id and parent_et.generation + 1 = child_et.generation
where child_et.id is null
group by parent_et.generation