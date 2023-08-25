/* Write your PL/SQL query statement below */
SELECT
    TO_CHAR(EVENT_DAY, 'YYYY-MM-DD') AS day,
    emp_id,
    SUM(OUT_TIME - IN_TIME) AS total_time
FROM EMPLOYEES
GROUP BY EMP_ID, EVENT_DAY
ORDER BY DAY, emp_id