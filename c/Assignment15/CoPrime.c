#include<stdio.h>

int main()
{
    int a, b,f=0;
    printf("enter a two numbers : ");
    scanf("%d%d", &a, &b);

    for (int i = 2; i <= a > b ? a : b;i++)
    {
        if(a%i==0 && b%i==0)
        {
            f = 1;
            break;
        }
    }
    if(f==1)
    {
printf("%d and %d are not co-prime numbers", a, b);
    }
    else
    {
printf("%d and %d are co-prime numbers", a, b);
    }
    
}