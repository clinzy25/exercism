import math

def score(x, y):
    d = math.sqrt(x ** 2 + y ** 2)
    points = {
        d > 10: 0,
        5 < d <= 10: 1,
        1 < d <= 5: 5,
        d <= 1: 10
    }

    return points.get(True)
