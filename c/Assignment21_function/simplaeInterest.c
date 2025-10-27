#include<stdio.h>

int simpleInterest(int p,int r,int n)
{
    return (p * r * n)/100;
}

int main()
{
    int p,r,n;
    printf("enter amount , interest rate, and days : ");
    scanf("%d%d%d", &p,&r,&n);
    float s = simpleInterest(p,r,n);
    printf("simple Interest = %f", s);
}