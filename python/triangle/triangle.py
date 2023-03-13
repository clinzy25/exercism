def validate(f):
    def inner(sides):
        return sum(sides) - max(sides) > max(sides) and f(sides)
    return inner

@validate
def equilateral(sides):
    return len(set(sides)) == 1

@validate
def isosceles(sides):
    return len(set(sides)) < 3

@validate
def scalene(sides):
    return len(set(sides)) == 3
