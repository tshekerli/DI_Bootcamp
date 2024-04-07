# Exercise 1
def box_printer(*args):
    max_len = max(len(arg) for arg in args)
    border = '*' * (max_len + 4)
    print(border)
    for arg in args:
        print(f"* {arg.ljust(max_len)} *")
    print(border)

box_printer("Hello", "World", "in", "reallylongword", "a", "frame")

# Exercise 2
def insertion_sort(alist):
   for index in range(1,len(alist)):
     currentvalue = alist[index]
     position = index
     while position>0 and alist[position-1]>currentvalue:
         alist[position]=alist[position-1]
         position = position-1
     alist[position]=currentvalue

alist = [54,26,93,17,77,31,44,55,20]
insertion_sort(alist)
print(alist)

# The purpose of the code in Exercise 2 is to sort a list of numbers in ascending order. This is achieved using the insertion sort algorithm.