#include<stdio.h>

int main()
{
    int no;
    printf("enter no : ");
    scanf("%d", &no);
    if(no%3==0 && no%2==0)
    {
        printf("%d is divisible by 3 and 2\n",no);
    }
    else if(no%3==0 || no%7==0)
    {
printf("%d is divisible by 3 or 7\n",no);
    }
    else
    {
        printf("not divisible ");
    }
}