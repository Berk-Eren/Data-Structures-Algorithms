import timeit


def multiply(a: int, b: int):
    n1 = str(a)
    n2 = str(b)

    len_n1 = len(n1)
    len_n2 = len(n2)

    min_length = max(len_n1, len_n2)

    if min_length <= 2:
        return a*b
    else:
        max_length = max(len_n1, len_n2)

        if max_length&1==1:
            max_length+=1

        n1 = n1.zfill(max_length)
        n2 = n2.zfill(max_length)

        number_of_digits = max_length
        half_number_of_digits = max_length>>1

        a1 = int(n1[:half_number_of_digits])
        a2 = int(n1[half_number_of_digits:])
        b1 = int(n2[:half_number_of_digits])
        b2 = int(n2[half_number_of_digits:])

        s1 = multiply(a1, b1)
        s2 = multiply(a2, b2)
        s3 = (a1+a2)*(b1+b2)
        s4 = s3-s1-s2

        return 10**number_of_digits*s1\
                +10**(half_number_of_digits)*s4\
                    +s2


print(multiply(1,456)==1*456)
print(multiply(4343, 4565645654645)==4343*4565645654645)
print(multiply(10,4323256)==10*4323256)
print(multiply(10003,4323256)==10003*4323256)
print(multiply(10001,4005)==10001*4005)
print(multiply(100001,4005)==100001*4005)
print(multiply(100001,40055)==100001*40055)



a = 3141592653589793238462643383279502884197169399375105820974944592
b = 2718281828459045235360287471352662497757247093699959574966967627

print(multiply(a, b) == a*b)
print(multiply(a, b))
#print(multiply(a, b))
