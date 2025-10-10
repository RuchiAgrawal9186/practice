// simpale interest

#include<stdio.h>
int main()
{
    int si, p, r, t;
    printf("enter amount,percentage rate, and time : ");
    scanf("%d%d%d", &p, &r, &t);
    si = (p * r * t) / 100;
    printf("simple interest = %d", si);
}