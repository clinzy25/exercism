from string import ascii_lowercase as a

def rotate(text, key):
    ROT = a[key:26] + a[0:key]
    result = ''
    for l in text:
        if l.casefold() in ROT:
            result += ROT[a.index(l.lower())].upper() if l.isupper() else ROT[a.index(l)]
        else:
            result += l
    return result
