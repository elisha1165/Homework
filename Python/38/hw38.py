number_list = [1,2,3,4,5,6,7,8,9,10]
for number in number_list:
   for number2 in number_list:
      print(number * number2)


import random
the_number = random.randint(1, 100)
try:
    number_guessed = int(input('Please choose a number from 1 - 100 '))
except NameError as n:
    print(
        'You entered a symbol other than a number. You can start the game over and play by the rules')
except ValueError as e:
    print(
        'You entered a symbol other than a number. You can start the game over and play by the rules')
while number_guessed != the_number:
    if number_guessed > 100 or number_guessed < 1:
        try:
            number_guessed = int(input(
                'The number you chose is invalid. Please choose a number between 1 and 100 '))
        except ValueError as e:
            print(
                'You entered a symbol other than a number. You can start the game over and play by the rules')
            break
    msg = 'Guess a higher number' if number_guessed < the_number else 'Guess a lower number'
    print(msg)
    try:
        number_guessed = int(input('Please try again '))
    except ValueError as e:
        print(
            'You entered a symbol other than a number. You can start the game over and play by the rules')
        break
if number_guessed == the_number:
    print(f'You guessed the number! It was {the_number} ')
