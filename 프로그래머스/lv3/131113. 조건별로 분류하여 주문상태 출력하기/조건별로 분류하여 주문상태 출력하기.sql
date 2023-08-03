-- 코드를 입력하세요
SELECT
    ORDER_ID,
    PRODUCT_ID,
    DATE_FORMAT(OUT_DATE, "%Y-%m-%d") AS OUT_DATE,
    IF (
        OUT_DATE IS NOT NULL,
        IF (DATE_FORMAT(OUT_DATE, "%Y-%m-%d") <= "2022-05-01", "출고완료", "출고대기"),
        "출고미정"
    ) AS "출고여부"
FROM FOOD_ORDER
ORDER BY ORDER_ID