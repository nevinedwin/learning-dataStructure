def reverse(input):
    if type(input) != str or len(input) < 2:
        return "input is not a string"
    totalNumber = len(input) - 1
    resultList = []
    for i in range(totalNumber, 0, -1):
        resultList.append(input[i])

    return "".join(resultList)


result = reverse("Hi My Name is Nevin")
# result = reverse(4)
print(result)


def reverse2(input):
    if(type(input) != str or len(input) < 2):
        return "input is not a string"
    return " ".join(input.split(" ")[::-1])


result2 = reverse2("Hi My Name Is Nevin")
print(result2)
