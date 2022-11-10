# LAB ACTIVITY 12:
# Pressure Sensing Mat:

## Question 1:
1. In the data file("data1.txt") the seperation of each data snap of the pressure mat is being seperated by 3 new line. Only in one instance there is seperation only with 2 new line. Have modified that and appended a new line to maintain the similar data format throughout the data file.
2. While considering the timestamp of a data snap of the mat, have considered the median time, i.e the time of the 21st row.
3. While calculating the time difference for the calculation of the stride velocity and the cadance, have ignored the decimal part of the seconds and done the calculation in whole number seconds.
4. Have calculated a single valid pressure point for a single data snap of the mat. To get this pressure point have considered the first non-zero pressure value that have ben received while traversing the mat from top to bottom.
5. ERROR handling has been done, as it was observed that there was a single pressure point with some non-zero value. Which appears to be error as a standalone cell has a non-zero value. Thsi scenario has been handled and data of this kind has been ignored and only data where multiple cells with non-zero values are together has been considered as valid.
6. To determine the different location of the foot, only shift of the pressure point with more than 3 cells has been considered as a new position of the feet.
7. To calculate the stride length distance between the 1st and the 3rd step location is calculated.
8. To calculate the stride velocity the stride distance is divided with the time difference of the 1st and the 3rd step.
9. The logic implemented to find the valid step locations is based on the Asumption that the person will always be moving from bottom to top.
10. Two libraries has been included in the program: "datetime" and "math".

## Question 2:
1. All the considerations followed for the first question is also valid for the question 2.
2. The given sample data is considered the data for the mat 1 for all the instances.
3. The data for the 2nd and the 3rd mat is being read from two another files, i.e "data2.txt" and "data3.txt"
4. For the sake of testing the data from the 2nd and the 3rd mat has been considered to the with all data points to be 0.
