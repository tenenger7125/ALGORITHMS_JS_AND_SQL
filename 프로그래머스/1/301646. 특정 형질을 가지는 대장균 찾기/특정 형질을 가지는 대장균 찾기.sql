select count(*) as count
from ecoli_data ed
where not ed.genotype & 2 and ed.genotype & 5