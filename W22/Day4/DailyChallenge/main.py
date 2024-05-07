import re
import string
from collections import Counter

class Text:
    def __init__(self, text):
        self.text = text

    def word_frequency(self, word):
        words = self.text.split()
        return words.count(word)

    def most_common_word(self):
        words = self.text.split()
        return Counter(words).most_common(1)[0][0]

    def unique_words(self):
        words = self.text.split()
        return list(set(words))

    @classmethod
    def from_file(cls, filename):
        with open(filename, 'r') as file:
            text = file.read()
        return cls(text)


class TextModification(Text):
    def remove_punctuation(self):
        return self.text.translate(str.maketrans('', '', string.punctuation))

    def remove_special_characters(self):
        return re.sub('[^A-Za-z0-9 ]+', '', self.text)
    


    # Create an instance of Text
text = Text("A good book would sometimes cost as much as a good house.")

# Get the frequency of a word
print(text.word_frequency("good"))  # Output: 2

# Get the most common word
print(text.most_common_word())  # Output: "a"

# Get unique words
print(text.unique_words())  # Output: ['A', 'house.', 'as', 'cost', 'book', 'would', 'good', 'sometimes', 'much']


# Create an instance of Text from a file
text_from_file = Text.from_file(r'C:\Users\tural\OneDrive\Masaüstü\Dev\DI_Bootcamp\W22\Day4\DailyChallenge\the_stranger.txt')

# Get the frequency of a word
print(text_from_file.word_frequency("the"))  # Output: 1807

# Get the most common word
print(text_from_file.most_common_word())  # Output: the

# Get unique words
print(text_from_file.unique_words())  # Output: depends on the content of the file