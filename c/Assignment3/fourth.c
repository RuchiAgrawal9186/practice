#include<stdio.h>
int main()
{
    int n;
    printf("enter a number : ");
    scanf("%d", &n);
    printf("last digit of number is %d\n", n % 10);
    printf("number without last digit is %d", n / 10);
}