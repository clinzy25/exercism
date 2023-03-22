def is_armstrong_number(number):
    digits = [int(x) for x in str(number)]
    return sum(i ** len(digits) for i in digits) == number
