import re

def is_isogram(s):
    clean_str = re.sub(r'\W', '', s).lower()
    return len(set(clean_str)) == len(clean_str)
