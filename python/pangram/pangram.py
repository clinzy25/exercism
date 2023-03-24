from string import ascii_lowercase

def is_pangram(sentence):
    return all(l in sentence.lower() for l in ascii_lowercase)
