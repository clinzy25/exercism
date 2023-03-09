def steps(n):
    if n > 0:
        num_steps = 0
        while n > 1:
            if n % 2 == 0:
                n /= 2
            else:
                n *= 3 + 1
            num_steps += 1
        return num_steps
    raise ValueError("Only positive integers are allowed")
