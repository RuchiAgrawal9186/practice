#include<stdio.h>

int main()
{
    int a, b,divide;
    printf("enter tow number : ");
    scanf("%d%d", &a, &b);
    if(a>b)
    {
while (a%b!=0)
    {
        
        divide = a % b;
        a = b;
        b = divide;
        printf("a = %d, b = %d", a, b);
    }
    printf("HCF  = %d", b);
    }
    else
    {
        while(b%a!=0)
        {
divide = b % a;
        b = a;
        a = divide;
        }
        printf("HCF = %d", a);
    }
    
    
}