from typing import Literal

count = 0



def swap(arr, ind_1, ind_2):
    temp = arr[ind_2]
    arr[ind_2] = arr[ind_1]
    arr[ind_1] = temp

def select_pivot(arr, l, r, pivot_type):
    if pivot_type == "last":
        swap(arr, l, r-1)
    elif pivot_type == "median":
        middle_point = (l+r-1)//2
        indice, val = sorted([ (l, arr[l]), 
                                (middle_point, arr[middle_point]), 
                                    (r-1, arr[r-1]) ], 
                                        key=lambda x: x[1] )[1]
        swap(arr, l, indice)

    return arr[l]

def quick_sort(arr, l, r, pivot_type: Literal["first", "last", "median"]="first"):
    global count

    if len(arr[l:r])>1:
        pivot_element = select_pivot(arr, l, r, pivot_type)

        i = l+1

        for j in range(l+1, r):
            if pivot_element>arr[j]:
                if arr[i]>arr[j]:
                    swap(arr, i, j)
                i += 1

        count += len(arr[l:r])-1

        if (i==r):
            swap(arr, l, i-1)
            quick_sort(arr, l, j, pivot_type)
        elif (i==l):
            quick_sort(arr, i+1, r, pivot_type)
        else:
            swap(arr, l, i-1)

            quick_sort(arr, i, j+1, pivot_type)
            quick_sort(arr, l, i-1, pivot_type)


with open("numbers.txt", "r") as f:
    data = f.readlines()
    arr = [int(val) for val in data]

quick_sort(arr, 0, len(arr), "first")

print(count)
