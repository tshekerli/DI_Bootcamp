# Instructions

#     Using the input function, ask the user for a string. The string must be 10 characters long.
#         If it’s less than 10 characters, print a message which states “string not long enough”.
#         If it’s more than 10 characters, print a message which states “string too long”.
#         If it’s 10 characters, print a message which states “perfect string” and continue the exercise.

#     Then, print the first and last characters of the given text.

#     Using a for loop, construct the string character by character: Print the first character, then the second, then the third, until the full string is printed. For example:

#     The user enters "HelloWorld"
#     Then, you have to construct the string character by character
#     H
#     He
#     Hel
#     ... etc
#     HelloWorld



#     4. Bonus: Swap some characters around then print the newly jumbled string (hint: look into the shuffle method). For example:

#     Hlrolelwod

import random
import random

def string_manipulator():
    user_string = input("Please enter a string: ")
    while True:
        if len(user_string) < 10:
            print("Your string is not long enough")
        elif len(user_string) > 10:
            print("Your string is too long")
        else:
            print("Your string length is perfect")
            print(f"First letter of your string is {user_string[0]} and the last letter of your string is {user_string[-1]} ")
            for char in user_string:
                print(char)
            
            letters = list(user_string)
            random.shuffle(letters)
            letters = "".join(letters)
            print(letters)
            break
                
        user_string = input("Please enter a string: ") 

string_manipulator()