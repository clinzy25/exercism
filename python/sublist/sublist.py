"""
This exercise stub and the test suite contain several enumerated constants.

Since Python 2 does not have the enum module, the idiomatic way to write
enumerated constants has traditionally been a NAME assigned to an arbitrary,
but unique value. An integer is traditionally used because it’s memory
efficient.
It is a common practice to export both constants and functions that work with
those constants (ex. the constants in the os, subprocess and re modules).

You can learn more here: https://en.wikipedia.org/wiki/Enumerated_type
"""

# Possible sublist categories.
# Change the values as you see fit.
SUBLIST = 'SUBLIST'
SUPERLIST = 'SUPERLIST'
EQUAL = 'EQUAL'
UNEQUAL = 'UNEQUAL'

def to_str(l):
    return ' , '.join(map(str, l)) + ' '

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
