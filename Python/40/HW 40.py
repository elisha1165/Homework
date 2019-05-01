 # hard code a list like this
#list1 = [65,33,17,87,54,25,78]
import random
# or use googles idea like this
#list1 = (random.sample(range(0,100),10))
# or use what we learned already like this
list1 = [random.randint(0, 100) for y in range(1, 11)]
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
print("\n")


class Die:
    def __init__(self, num_of_sides: int):
        self.num_of_sides = num_of_sides
t
    def roll_die(self):
        return random.randint(1, self.num_of_sides)
        # print(spin)
        # return spin

    def roll_multiple_times(self, num_of_times):
        all_spins = []
        for i in range(0, num_of_times):
            spin = self.roll_die()
            all_spins.append(spin)
        return all_spins


class Six_sided_die(Die):
    def __init__(self, num_of_sides=6):
        self.num_of_sides = num_of_sides


twelve_die = Die(12)
spin1 = twelve_die.roll_die()
spin2 = twelve_die.roll_die()
spin3 = twelve_die.roll_die()
spin4 = twelve_die.roll_die()
print(spin1, spin2, spin3, spin4)

print(twelve_die.roll_multiple_times(8))
print(twelve_die.roll_multiple_times(50))

six = Six_sided_die()
spin_six = six.roll_die()
print(spin_six)
