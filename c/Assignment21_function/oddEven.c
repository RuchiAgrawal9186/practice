#include<stdio.h>

int OddEven(int a)
{
    if(a%2==0)
    {
        return 0;
    }
    else
    {
        return 1;
    }
}

int main()
{
    int no;
    printf("enter no : ");
    scanf("%d", &no);
    float a = OddEven(no);
    if(a)
    {
        printf("%d number is odd",no);
    }
    else
    {
        printf("%d number is even", no);
    }
}