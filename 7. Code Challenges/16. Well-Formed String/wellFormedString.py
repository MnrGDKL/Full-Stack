
# ! This is an interview question asked by Facebook.
# ! Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced (well-formed).
# ! For example, given the string "([])", you should return true.
# ! Given the string "([)]" or "((()", you should return false.



def wellFormedString(string):
    while "()" in string or "[]" in string or "{}" in string:
        string = string.replace("()", "").replace("[]", "").replace("{}", "")
    return string == ""


print(wellFormedString("([{({})}]({}))")) #? Output: True
print(wellFormedString("((()"))           #? Output: False
print(wellFormedString("([)]"))           #? Output: False
print(wellFormedString("([])"))           #? Output: True

