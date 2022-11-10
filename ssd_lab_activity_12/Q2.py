import math 
from datetime import datetime

dummyDataSet = []
dataSet = []
timestamp = []
filteredData = []
uniqueFilteredData = []
uniqueFilteredTimestamp = []

def fetchData(path):
    dummyDataSet = []
    with open(path, 'r') as file:
        count = 0
        currList = []
        for newLine in file:
            count += 1
            if count == 43:
                dummyDataSet.append(currList)
                currList = []
            elif count == 44:
                continue
            elif count == 45:
                count = 0
                continue
            else:
                row = []
                newCount = 0
                for element in newLine.split():
                    newCount += 1
                    if count == 21 and newCount == 1:
                        timestamp.append(element[0:len(element) - 4])
                    elif count != 21 and newCount == 1:
                        continue
                    else:
                        row.append(element)
                currList.append(row)
        dummyDataSet.append(currList)
    return dummyDataSet

def concatDataSet():
    for i in range(0, 20):
        newList = []
        for j in range(0, 42):
            newList.append(dataSet1[i][j])
        for j in range(0, 42):
            newList.append(dataSet2[i][j])
        for j in range(0, 42):
            newList.append(dataSet3[i][j])
        
        dataSet.append(newList)

def checkCurrPoint(sheet, point1, point2):
    return ((point1 >= 1 and sheet[point1-1][point2] != "0") or (point1 < 125 and sheet[point1+1][point2] != "0") or (point2 >= 1 and sheet[point1][point2-1] != "0") or (point2 < 24 and sheet[point1][point2+1] != "0"))

def checkValidPressurePoints():
    for k in range(0, len(dataSet)):
        currMatrix = dataSet[k]
        flag = False
        for i in range(0, len(currMatrix)):
            for j in range(0, len(currMatrix[i])):
                if(currMatrix[i][j] != "0" and checkCurrPoint(currMatrix, i, j)):
                    pair=[i, j]
                    filteredData.append(pair)
                    flag = True
                if(flag == True):
                    break
            if(flag == True):
                break
        if(flag == True):
            continue
        elif(flag == False):
            pair=[0, 0]
            filteredData.append(pair)


def filterValidPoints():
    prevX = -1
    prevY = -1
    for i in range(0, len(filteredData)):
        x = filteredData[i][0]
        y = filteredData[i][1]
        if(x == 0 and y == 0):
            continue
        elif (prevX == -1 and prevY == -1):
            pair = [x, y]
            uniqueFilteredData.append(pair)
            uniqueFilteredTimestamp.append(timestamp[i])
            prevX = x
            prevY = y
        else:
            distance = math.sqrt(pow(prevX - x, 2) + pow(prevY - y, 2))
            if (distance < 3):
                continue
            else:
                pair = [x, y]
                uniqueFilteredData.append(pair)
                uniqueFilteredTimestamp.append(timestamp[i])
                prevX = x
                prevY = y


def printResult():
    #stride length
    strideLength = 0
    if (len(uniqueFilteredData) < 3):
        print("Stride length : 0 units")
    else:
        strideLength = round(math.sqrt(pow(uniqueFilteredData[0][0] - uniqueFilteredData[2][0], 2) + pow(uniqueFilteredData[0][1] - uniqueFilteredData[2][1], 2)), 2)
        print("Stride length :", strideLength, "units")

    first = datetime.strptime(uniqueFilteredTimestamp[0], '%H:%M:%S')
    second = datetime.strptime(uniqueFilteredTimestamp[2], '%H:%M:%S')
    timeDifference = (second - first).total_seconds()

    #Stride Velocity
    if(strideLength == 0):
        print("Stride velocity : 0 units/sec")
    else:
        strideVelocity = round(strideLength / timeDifference, 2)
        print("Stride velocity :", strideVelocity, "units/sec")
    
    #Cadence:
    cadence = round((3 / timeDifference) * 60, 2)
    print("Cadance :", cadence)


dataSet1 = fetchData('./data1.txt')
dataSet2 = fetchData('./data2.txt')
dataSet3 = fetchData('./data3.txt')
concatDataSet()
checkValidPressurePoints()
filterValidPoints()
printResult()