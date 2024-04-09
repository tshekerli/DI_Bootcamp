def count_occurence(text, letter):
    counter = 0
    for char in text:
        if char == letter:
            counter+=1
    
    return counter

print(count_occurence("Programming is cool!", "o"))
print(count_occurence("This is a great example", "y"))

