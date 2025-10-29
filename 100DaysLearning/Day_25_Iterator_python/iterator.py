# behind loops how its working with using iteartor

l1=[10,20,30,40,50,60,70]
it=iter(l1)

while True:
    try:
        x=next(it)
        print(x)
    except StopIteration:
        break