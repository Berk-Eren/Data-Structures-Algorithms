def get_data():
    with open("numbers.txt", "r") as f:
        data = [int(num) for num in f.readlines()]

    return data

data = get_data()

def merge_count(left, right):
    left_len = len(left)
    right_len = len(right)
    new_arr = []

    i,j = 0,0
    count = 0

    while (i<left_len and j<right_len):
        if left[i]>right[j]:
            new_arr.append(right[j])
            count += len(left[i:])
            j += 1
        else:
            new_arr.append(left[i])
            i += 1

    new_arr.extend(right[j:]) if i>=left_len else new_arr.extend(left[i:])
    #print(left, right, new_arr, count)
    return new_arr, count

def split_array(arr: list):
    if len(arr)==1:
        return arr, 0

    arr_len = len(arr)//2

    left = arr[:arr_len]
    right = arr[arr_len:]

    A, x = split_array(left)
    B, y = split_array(right)
    C, z = merge_count(A, B)

    return C, x+y+z

def main():
    data = get_data()

    _, number_of_inversions = split_array(data)
    print(number_of_inversions)


main()
