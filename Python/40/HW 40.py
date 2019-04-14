list1 = [65,33,17,87,54,25,78]
for i in range(len(list1)):
    lowest = i
    for j in range(i+1, len(list1)):
        if list1[lowest] > list1[j]:
            lowest = j
    list1[i], list1[lowest] = list1[lowest], list1[i]  
for i in range(len(list1)):
    print(list1[i])        