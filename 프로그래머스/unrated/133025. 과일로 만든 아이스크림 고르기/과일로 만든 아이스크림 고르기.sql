-- 코드를 입력하세요
SELECT A.FLAVOR
FROM FIRST_HALF AS A INNER JOIN ICECREAM_INFO AS B
ON A.FLAVOR = B.FLAVOR
WHERE TOTAL_ORDER > "3000" AND INGREDIENT_TYPE LIKE "fruit%"