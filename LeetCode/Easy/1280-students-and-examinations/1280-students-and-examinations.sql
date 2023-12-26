/* Write your PL/SQL query statement below */
select 
    stu.student_id
    , stu.student_name
    , sub.subject_name
    , count(ex.student_id) as attended_exams
from students stu
    cross join subjects sub
    left join examinations ex
        on stu.student_id = ex.student_id and sub.subject_name = ex.subject_name
group by stu.student_id, stu.student_name, sub.subject_name
order by stu.student_id, sub.subject_name