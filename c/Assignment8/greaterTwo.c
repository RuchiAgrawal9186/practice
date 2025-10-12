#include<stdio.h>

int main()
{
    int a, b;
    printf("enter two numbers : ");
    scanf("%d%d", &a, &b);
    if(a>=b)
    {
        printf("%d is greter", a);
    }
    else
    {
        printf("%d is greter", b);
    }
}