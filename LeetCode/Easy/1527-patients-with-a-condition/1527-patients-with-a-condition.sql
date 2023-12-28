/* Write your PL/SQL query statement below */
select *
from patients
where regexp_like(conditions, '(^| +)DIAB1.*')