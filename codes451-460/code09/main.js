/* SELECT
t1.ProductID,
t2.ProductName,
t1.Quantity,
t2.Price
FROM OrderDetails as t1
INNER JOIN Products as t2
ON t1.ProductID = t2.ProductID 


*/