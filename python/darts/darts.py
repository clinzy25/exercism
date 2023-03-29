import math

def score(x, y):
    distance = math.sqrt(x ** 2 + y ** 2)
    points = {
        0: distance > 10,
        1: 5 < distance <= 10,
        5: 1 < distance <= 5,
        10: distance <= 1
    }
    for point, toss in points.items():
        if toss:
            return point
