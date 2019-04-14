#hard code a list like this
#list1 = [65,33,17,87,54,25,78]
import random
#or use googles idea like this
#list1 = (random.sample(range(0,100),10))
#or use what we learned already like this
list1 = [random.randint(0, 100) for y in range(1,11)]
for i in range(len(list1)):
    print(list1[i], end=" ")
print("\n")   
for i in range(len(list1)):
    lowest = i
    for j in range(i+1, len(list1)):
        if list1[lowest] > list1[j]:
            lowest = j
    list1[i], list1[lowest] = list1[lowest], list1[i]  
for i in range(len(list1)):
    print(list1[i], end=" ")        