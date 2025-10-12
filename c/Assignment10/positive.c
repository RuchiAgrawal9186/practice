#include <stdio.h>

int main()
{
    int no;
    printf("enter number : ");
    scanf("%d", &no);
    if(no>0)
    {
        printf("%d is positive number", no);
    }
    else if(no==0)
    {
        printf("%d is zero", no);
    }
    else if(no<0)
    {
        printf("%d is negative number", no);
    }
    else
    {
        printf("no a number");
    }
}