/* Write your PL/SQL query statement below */

delete person
where id not in (select min(id) from person group by email)