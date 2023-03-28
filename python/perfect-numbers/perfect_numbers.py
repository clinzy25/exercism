def classify(n):
    """ A perfect number equals the sum of its positive divisors.

    :param number: int a positive integer
    :return: str the classification of the input integer
    """
    if n > 0:
        sum_divisors = sum([x[1] if n % x[0] == 0 else 0 for x in enumerate(range(1, n), 1)])

        if sum_divisors < n:
            return 'deficient'
        if sum_divisors > n:
            return 'abundant'
        return 'perfect'
    raise ValueError("Classification is only possible for positive integers.")
