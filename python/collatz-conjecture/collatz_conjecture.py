def steps(n, count=0):
    if n < 1:
        raise ValueError("Only positive integers are allowed")
    if n == 1:
        return count
    return steps(n / 2, count + 1) if n % 2 == 0 else steps(3 * n + 1, count + 1)
