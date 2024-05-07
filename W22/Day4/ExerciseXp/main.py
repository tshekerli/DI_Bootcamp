def get_words_from_file():
    word_list = open('words.txt', "r")
    word_list = word_list.read()
    word_list = word_list.split('\n')
    return word_list

print(get_words_from_file())

def create_a_sentence(lenght):
    import random
    word_list = get_words_from_file()
    sentence = ''
    for x in range(lenght):
        sentence += " "+ random.choice(word_list).lower()

def main():
    print('')