# Exercise 1: Formula
import math

C = 50
H = 30
D = input("Enter comma separated values: ").split(',')

results = []
for d in D:
    Q = math.sqrt((2 * C * int(d)) / H)
    results.append(str(round(Q)))

print(','.join(results))


# Exercise 2 : List of integers
numbers = [3, 47, 99, -80, 22, 97, 54, -23, 5, 7] 

print("Numbers: ", numbers)
numbers.sort(reverse=True)
print("Sorted Descending: ", numbers)
print("Sum: ", sum(numbers))
print("First and Last: ", [numbers[0], numbers[-1]])
print("Greater than 50: ", [num for num in numbers if num > 50])
print("Smaller than 10: ", [num for num in numbers if num < 10])
print("Squared: ", [num**2 for num in numbers])
unique_numbers = list(set(numbers))
print("Unique Numbers (Count: {}): {}".format(len(unique_numbers), unique_numbers))
print("Average: ", sum(numbers) / len(numbers))
print("Max: ", max(numbers))
print("Min: ", min(numbers))


# Exercise 3: Working on a paragraph
paragraph = "Your paragraph here"
sentences = paragraph.split('.')
words = paragraph.split(' ')
unique_words = set(words)

print("Characters: ", len(paragraph))
print("Sentences: ", len(sentences))
print("Words: ", len(words))
print("Unique Words: ", len(unique_words))


# Exercise 4
text = "New to Python or choosing between Python 2 and Python 3? Read Python 2 or Python 3."
words = text.split(' ')
word_counts = {}

for word in words:
    if word in word_counts:
        word_counts[word] += 1
    else:
        word_counts[word] = 1

for word, count in word_counts.items():
    print("{}:{}".format(word, count))

    