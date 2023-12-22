/* Write your PL/SQL query statement below */

select 'Low Salary' as category, count(case when income < 20000 then 1 end) as accounts_count from Accounts
union
select 'Average Salary', count(case when 20000 <= income and income <= 50000 then 1 end) from Accounts
union
select 'High Salary', count(case when 50000 < income then 1 end) from Accounts