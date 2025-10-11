#include<stdio.h>
int main()
{
    int no,res,digit;
    printf("enter four digit number : ");
    scanf("%d", &no);
    printf("enter one digit to add  : ");
    scanf("%d", &digit);
    res = no / 10;
    printf("add 0 in last digit = %d\n", res * 10);
    printf("add %d in last = %d", digit, no * 10 + digit);
}