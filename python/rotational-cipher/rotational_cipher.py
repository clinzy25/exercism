from string import ascii_lowercase as a

def rotate(text, key):
    rot = a[key:] + a[:key]

    trans = str.maketrans(a + a.upper(), rot + rot.upper())
    return text.translate(trans)
