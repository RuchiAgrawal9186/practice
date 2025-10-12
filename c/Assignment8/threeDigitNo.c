#include<stdio.h>

int main()
{
    int no;
    printf("enter no : ");
    scanf("%d", &no);
    if(no>99 && no<1000)
    {
        printf("%d is three digit number", no);
    }
    else
    {
        printf("%d is not a three digit number", no);
    }
}