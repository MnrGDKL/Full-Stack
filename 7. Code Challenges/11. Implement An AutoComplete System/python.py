"""
 This is an interview question asked by Twitter.
Implement an autocomplete system. That is, given a query string "s" and a set of all possible query strings, return all strings in the set that have s as a prefix.
For example, given the query string "de" and the set of strings [dog, deer, deal], return [deer, deal].

"""

def autoCompleteSystem(query, strings):
    filteredStrings = [i for i in strings if i.startswith(query)]
    print(filteredStrings)

autoCompleteSystem("de",["dog", "deer", "deal"]); # ['deer', 'deal']

