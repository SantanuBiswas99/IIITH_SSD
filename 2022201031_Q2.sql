select concat(Fname, " ", Minit, " ", Lname) as "Full name", Ssn, Dno, supervisors.value from (select distinct Super_ssn, count(Super_ssn) as value from EMPLOYEE group by Super_ssn having count(Super_ssn) > 0) 
as supervisors join EMPLOYEE as emp where emp.Ssn = supervisors.Super_ssn order by 4;