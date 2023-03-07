def square(number):
    """
    Get the number doubled n times starting from 1
    :number: number - number of times 1 was doubled
    """
    if 1 <= number <= 64:
        start = 1
        for _ in range(number - 1):
            start += start
        return start
    raise ValueError("square must be between 1 and 64")

def total():
    """
    Get toal number of grains on a chessboard if the first square has 1 grain and is doubled for every subsequent square
    """
    _total = 0
    for i in range(1, 65):
        _total += square(i)
    return _total
