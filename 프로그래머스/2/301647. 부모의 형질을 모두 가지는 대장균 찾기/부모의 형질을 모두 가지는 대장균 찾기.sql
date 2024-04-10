select 
    child_ed.id
    , child_ed.genotype
    , parent_ed.genotype as parent_genotype
from ecoli_data parent_ed
    inner join ecoli_data child_ed
        on parent_ed.id = child_ed.parent_id
where parent_ed.genotype & child_ed.genotype >= parent_ed.genotype