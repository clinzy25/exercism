from collections import Counter

YACHT = 'YACHT'
ONES = 1
TWOS = 2
THREES = 3
FOURS = 4
FIVES = 5
SIXES = 6
FULL_HOUSE = 'FULL_HOUSE'
FOUR_OF_A_KIND = 'FOUR_OF_A_KIND'
LITTLE_STRAIGHT = 'LITTLE_STRAIGHT'
BIG_STRAIGHT = 'BIG_STRAIGHT'
CHOICE = 'CHOICE'

def score(dice, category):
    scores = {
        YACHT: 50 if len(set(dice)) == 1 else 0,
        FULL_HOUSE: sum(dice) if sorted([b for b in list(Counter(dice).values())]) == [2, 3] else 0,
        FOUR_OF_A_KIND: [k * 4 if v in [4, 5] else 0 for k, v in Counter(dice).items()][0],
        BIG_STRAIGHT: 30 if sorted(dice) == [2, 3, 4, 5, 6] else 0,
        LITTLE_STRAIGHT: 30 if sorted(dice) == [1, 2, 3, 4, 5] else 0,
        CHOICE: sum(dice)
    }

    return dice.count(category) * category if isinstance(category, int) else scores[category]
