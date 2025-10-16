#include<stdio.h>

int main()
{
    int no,fact=1;

    printf("enter a number to calculate factorial : ");
    scanf("%d", &no);
    for (int i = no; i >= 1;i--)
    {
        fact *= i;
    }
    printf("factorial of %d = %d", no, fact);
}