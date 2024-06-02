""" 
Q1. Let us say your expense for every month are listed below,
    i. January - 2200
    ii. February - 2350
    iii. March - 2600
    iv. April - 2130
    v. May - 2190
Create a list to store these monthly expenses and using that find out, 

1. In Feb, how many dollars you spent extra compare to January?
2. Find out your total expense in first quarter (first three months) of the year.
3. Find out if you spent exactly 2000 dollars in any month
4. June month just finished and your expense is 1980 dollar. Add this item to our monthly expense list
5. You returned an item that you bought in a month of April and
got a refund of 200$. Make a correction to your monthly expense list
based on this

"""     

# OWN ANSWER

monthly_expense = [2200, 2350, 2600, 2130, 2190]
month = ["January", "February", "March", "April", "May"]

# 1.
print('\n1')
extra_compare_to_jan = monthly_expense[1]-monthly_expense[0]
print(f'{extra_compare_to_jan} dollors you spent extra compare to january')

# 2
print('\n2')
total_expense = monthly_expense[0] + monthly_expense[1] + monthly_expense[2]
print(f'{total_expense} dollors is the total expense in first quarter')
 
# 3
print('\n3')
def check_2000_spend():
    flag = False
    for i in range(len(monthly_expense)):
        if(monthly_expense[i] == 2000):
            flag = True
            print(f"In {month[i]} spent exactly 2000")
    
    if(not flag):
        print("No month has expense 2000")

check_2000_spend()

# 4
print('\n4')
month.append("June")
monthly_expense.append(1980)

# 5
print('\n5')
def get_month_index (val):
    for i in range(len(month)):
        if(month[i] == val):
            return i
    
monthly_expense[get_month_index("April")] = monthly_expense[get_month_index("April")] + 200
print(f"Corrected List {monthly_expense}")


# CORRECT ANSWER

exp = [2200,2350,2600,2130,2190]

# 1. In Feb, how many dollars you spent extra compare to January?
print("In feb this much extra was spent compared to jan:",exp[1]-exp[0]) # 150

# 2. Find out your total expense in first quarter (first three months) of the year
print("Expense for first quarter:",exp[0]+exp[1]+exp[2]) # 7150

# 3. Find out if you spent exactly 2000 dollars in any month
print("Did I spent 2000$ in any month? ", 2000 in exp) # False

# 4. June month just finished and your expense is 1980 dollar. Add this item to our monthly expense list
exp.append(1980)
print("Expenses at the end of June:",exp) # [2200, 2350, 2600, 2130, 2190, 1980]

# 5. You returned an item that you bought in a month of April and
# got a refund of 200$. Make a correction to your monthly expense list
# based on this
exp[3] = exp[3] - 200
print("Expenses after 200$ return in April:",exp) # [2200, 2350, 2600, 1930, 2190, 1980]