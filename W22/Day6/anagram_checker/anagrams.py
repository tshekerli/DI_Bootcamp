from anagram_checker import AnagramChecker

logo = r"""
                                                          _____  _                  _               
     /\                                                  / ____|| |                | |              
    /  \    _ __    __ _   __ _  _ __  __ _  _ __ ___   | |     | |__    ___   ___ | | __ ___  _ __ 
   / /\ \  | '_ \  / _` | / _` || '__|/ _` || '_ ` _ \  | |     | '_ \  / _ \ / __|| |/ // _ \| '__|
  / ____ \ | | | || (_| || (_| || |  | (_| || | | | | | | |____ | | | ||  __/| (__ |   <|  __/| |   
 /_/    \_\|_| |_| \__,_| \__, ||_|   \__,_||_| |_| |_|  \_____||_| |_| \___| \___||_|\_\\___||_|   
                           __/ |                                                                    
                          |___/                                                                     
"""
anagram_checker = AnagramChecker()
def anagrams():
    print("""\n\n\n""")
    print(logo)
    print("Welcome to Anagram Checker")
    while True:
        user_word = input("To play the game please enter yes to close the game please enter no: ").lower()
        while user_word not in ["yes", "no"]:
            print("Invalid input")
            user_word = input("To play the game please enter yes to close the game please enter no: ").lower()
        if user_word == "yes":
            
            user_anagram = input("Please enter a word: ").lower()
            user_anagram = user_anagram.replace(' ', '')
            while anagram_checker.is_valid_word(user_anagram) == False:
                user_anagram = input("Invalid word. Please enter a different word: ").lower()
                user_anagram = user_anagram.replace(' ', '')
            
            anagram_checker.get_anagrams(user_anagram)
            if len(anagram_checker.anagrams) == 0:
                print(f"You selected word {user_anagram} is actually not an anagram. It is antigram")
            else:
                print(f"Your word is {user_anagram} and total anagrams with your word are: {anagram_checker.anagrams}")
                anagram_checker.empty_results()
            

        else:
            
            break


anagrams()