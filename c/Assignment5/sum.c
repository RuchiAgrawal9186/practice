#include<stdio.h>

int main()
{
    int a,sum;
    printf("enter three DIGIT number : ");
    scanf("%d", &a);
    sum = a/100+(a/10)%10+ a%10;
    printf("sum of all three numbers  = %d", sum);
}