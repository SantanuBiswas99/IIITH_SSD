import csv;

filePath = "lab_11_data.csv"
data = []

#1
with open(filePath,'r') as file:
    readData = csv.reader(file, delimiter=',')
    file.readline()
    for row in readData:        
        entry = []
        count = 0
        for item in row:
            item = item.replace(",", "")
            entry.append(item)
            count += 1
            if count == 7:
                break
        data.append(entry)

#2
data = list(filter(lambda x: (float(x[6]) >= -3), data)) 

#3
openSum = sum(map(lambda x: float(x[1]), data))
highSUm = sum(map(lambda x: float(x[2]), data))
lowSum = sum(map(lambda x: float(x[3]), data))

size = len(data)
openAvg = round(openSum / size, 2)
highAvg = round(highSUm / size, 2)
lowAvg = round(lowSum / size, 2)

f = open("avg_output.txt", "w")
f.write("Open Average : " + str(openAvg) + "\n")
f.write("High Average : " + str(highAvg) + "\n")
f.write("Low Average : " + str(lowAvg) + "\n")
f.close()

#4
print("Enter a character")
inputChar = input()
inputChar = inputChar.upper()

outputList = []
for entry in data:
    if entry[0][0].upper() == inputChar:
        outputList.append(entry)

if len(outputList) != 0:
    n = max(len(x) for l in outputList for x in l)
    for row in outputList:
        print(''.join(x.ljust(n + 2) for x in row))


#5
if len(outputList) != 0:
    f = open("stock_output.txt", "w")
    for entry in outputList:
        for item in entry:
            f.write(item + " ")
        f.write("\n")
else:
    print("No results found")