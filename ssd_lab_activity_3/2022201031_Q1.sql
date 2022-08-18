select distinct concat(Fname, Minit, Lname) as "Full name", Ssn, Dnumber, Dname from (select Mgr_ssn, Dname, Dnumber from DEPARTMENT where Dnumber in
(select Dno from EMPLOYEE where Ssn in 
(select  D.Essn from (select Essn, Pno, IFNULL(Hours, 0) as Hours from WORKS_ON) as D group by D.Essn having sum(D.Hours) < 40.0))) as Depart
join EMPLOYEE as emp where emp.Ssn = Depart.Mgr_ssn;
