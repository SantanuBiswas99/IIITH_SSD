DELIMITER $$
CREATE PROCEDURE add_two_nums (in num1 int, in num2 int, out num3 int)
begin
 SELECT (num1 + num2) INTO num3 FROM DUAL;
END$$
DELIMITER ;