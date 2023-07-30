-- 코드를 입력하세요
SELECT PRODUCT_CODE, PRICE * SUM(SALES_AMOUNT) AS SALES
FROM PRODUCT AS A LEFT JOIN OFFLINE_SALE AS B
ON A.PRODUCT_ID = B.PRODUCT_ID
GROUP BY PRODUCT_CODE
ORDER BY SALES DESC, PRODUCT_CODE
;