def validate(sides):
    return sum(sides) - max(sides) > max(sides)

def equilateral(sides):
    return len(set(sides)) == 1 and validate(sides)

def isosceles(sides):
    return len(set(sides)) == 2 and validate(sides) or equilateral(sides)

def scalene(sides):
    return len(set(sides)) == 3 and validate(sides)
