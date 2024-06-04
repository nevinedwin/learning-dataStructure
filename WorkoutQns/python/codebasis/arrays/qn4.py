"""
Write a Function to find the first non repeating character in a string
"""


def find_non_repeating_char (string):
    string = string.lower()
    hashmap = {}
    for i in string:
        if(i in hashmap):
            hashmap[i] += 1
        else:
            hashmap[i] = 1
    
    for j in string:
        if(hashmap[j] == 1):
            return j
        
        
        
result1 = find_non_repeating_char("Nevin edwin")
print(result1)

result2 = find_non_repeating_char("Peter Das")
print(result2)

result3 = find_non_repeating_char("malayalam")
print(result3)