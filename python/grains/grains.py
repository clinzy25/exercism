def square(number):
    """
    Get 1 doubled n times
    :number: number - number of times 1 was doubled
    """
    if 1 <= number <= 64:
        return 2 ** (number - 1)
    raise ValueError("square must be between 1 and 64")


def total():
    """
    Get total number of grains on a chessboard if the
    first square has 1 grain and is doubled for every subsequent square
    """
    return 2 ** 64 - 1
