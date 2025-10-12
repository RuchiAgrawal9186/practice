#include<stdio.h>
int main()
{
    int no;
    printf("enter a number : ");
    scanf("%d", &no);
    if(no >=0)
    {
        printf("no is positive\n");
    }
    else
    {
        printf("no is non-positive\n");
    }

    if(no%5==0)
    {
        printf("no is divisible by 5");
    }
    else
    {
        printf("no is not divisible by 5");
    }

}