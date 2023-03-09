def response(hey_bob):
    is_whitespace = hey_bob.isspace() or not hey_bob
    is_upper = hey_bob.isupper()
    last_char = not is_whitespace and next(char for char in reversed(hey_bob) if char != ' ')
    if is_whitespace:
        return 'Fine. Be that way!'
    if last_char == '?' and is_upper:
        return "Calm down, I know what I'm doing!"
    if last_char == '?':
        return 'Sure.'
    if is_upper:
        return 'Whoa, chill out!'
    return 'Whatever.'
