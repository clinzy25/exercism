def is_armstrong_number(number):
    digits = str(number)
    return sum(int(i) ** len(digits) for i in digits) == number
