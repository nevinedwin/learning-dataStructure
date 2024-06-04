"""
Create a list of all odd numbers between 1 and a max number. Max number is something you need to take from a user using input() function
"""

# CORRECT ONE
max_number = int(input("Enter a number"))

result = []

for i in range(1, max_number):
    if(i%2 == 1):
        result.append(i)

print(result)