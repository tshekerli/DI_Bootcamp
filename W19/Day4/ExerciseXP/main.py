# #Exercise 1

# my_fav_numbers = [3, 7, 13, 21]
# my_fav_numbers.append(2)
# my_fav_numbers.append(5)
# my_fav_numbers.pop(-1)

# friend_fav_numbers= [1, 2, 5, 11, 21, 7]
# our_fav_numbers = []

# for x in my_fav_numbers:
#     if x in friend_fav_numbers:
#         our_fav_numbers.append(x)

# print(our_fav_numbers)

#Exercise 2

# ex2_tuple = (2, 3, 4, 5)
# ex2_tuple.append(5) #this will give an error
# print(ex2_tuple) #it did

#Exercise 3

# basket = ["Banana", "Apples", "Oranges", "Blueberries"];

# basket.remove("Banana")
# basket.remove("Blueberries")
# basket.append("Kiwi")
# basket.insert(0, "Apples")
# apple_count = 0
# for apple in basket:
#     if apple == "Apples":
#         apple_count+=1

# print(basket)
# print(f"apple count is {apple_count} " )
# basket.clear()
# print(basket)   

#Exercise 4

#Floats are floating point numbers

# list_of_floats = []
# x = 1
# while True:
    
#     x+=0.5
#     if x == int(x):
#        list_of_floats.append(int(x))
#     else:
#         list_of_floats.append(x)
#     if x == 5:
#          break

# print(list_of_floats)


#Exercise 5

# for x in range(1, 21):
#     print(x)

# for x in range(1, 21):
#     if x%2 == 0:
#         print(x)

#Exercise 6
import os


while True:
    os.system('cls')
    my_name = "Tural"
    user_name = input("Please enter your name if our names match this loop will stop: ")

    if my_name == user_name:
        break