SUBLIST = 'SUBLIST'
SUPERLIST = 'SUPERLIST'
EQUAL = 'EQUAL'
UNEQUAL = 'UNEQUAL'

def to_str(l):
    return ' ,'.join(map(str, l)) + ' '

def sublist(list_one, list_two):
    l1 = to_str(list_one)
    l2 = to_str(list_two)

    lookup = {
        l2 != l1: UNEQUAL,
        l2 in l1: SUPERLIST,
        l1 in l2: SUBLIST,
        l2 == l1: EQUAL,
    }

    return lookup.get(True)
