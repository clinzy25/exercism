def steps(n):
    if n < 1:
        raise ValueError("Only positive integers are allowed")
    if n == 1:
        return 0
    return 1 + (steps(n / 2) if n % 2 == 0 else steps(3 * n + 1))
