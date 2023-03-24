import re, functools

def is_valid(isbn):
    clean_str = re.sub(r'[^0-9]', '', isbn)
    return functools.reduce(lambda a, b: a + int(b[1]) * (10 - b[0]), enumerate(clean_str))
