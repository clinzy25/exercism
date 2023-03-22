def convert(n):
    factors = {
        3: 'Pling',
        5: 'Plang',
        7: 'Plong'
    }

    return ''.join(v for k, v in factors.items() if n % k == 0) or str(n)
