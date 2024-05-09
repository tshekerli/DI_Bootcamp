class AnagramChecker:
    
    def __init__(self):
        with open('text.txt', 'r') as file:
            self.wordlist = file.read().lower().split('\n')
        self.anagrams = set()
        
       

    def is_valid_word(self, word):
        if word in self.wordlist:
            return True
        else:
            return False
        
    def is_anagram(self, word1, word2):
        if len(word1) != len(word2):
            return False
        else:
                if sorted(list(word1)) !=  sorted(list(word2)):
                    return False
                else: 
                    return True
                
    def get_anagrams(self, word):
        
        for x in self.wordlist:
            if x == word:
                continue
            if self.is_anagram(word1=word, word2=x.lower()):
                self.anagrams.add(x)

        


    def empty_results(self):
        self.anagrams.clear()
