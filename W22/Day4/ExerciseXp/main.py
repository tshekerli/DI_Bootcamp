# def get_words_from_file():
#     word_list = open('words.txt', "r")
#     word_list = word_list.read()
#     word_list = word_list.split('\n')
#     return word_list



# def create_a_sentence(length):
#     import random
#     word_list = get_words_from_file()
#     sentence = ' '.join(random.choice(word_list).lower() for _ in range(length))
#     return sentence


# def main():
#     print("""
#     This program generates a sentence of a given length.
#     The words used in the sentence are randomly chosen from 'words.txt'.
#     Which has 30k ish words
#     """)

#     user_length  = int(input("Please enter a lenght of a sentence you want to generate: "))
#     print(create_a_sentence(user_length))

# if __name__ == "__main__":
#     main()


import json
sampleJson = { 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}
sampleJson["company"]["employee"]['birt_date'] = 1997
salary = sampleJson["company"]["employee"]["payable"]['salary']

jsonfile = open('json.json', 'w')
json.dump(sampleJson, jsonfile)

print(sampleJson, salary)