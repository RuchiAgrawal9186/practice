#include<stdio.h>
int main()
{
    int no;
    printf("enter no : ");
    scanf("%d", &no);
    if(no%2==0)
    {
        printf("%d is even", no);
    }
    else
    {
        printf("%d is odd", no);
    }


    //  without % operator 
    if(no/2*2==no)
    {
printf("%d is even", no);
    }
    else
    {
printf("%d is odd", no);
    }

    //   using bitwise  operator 

    if(no&1)
    {
        printf("%d is odd", no);
    }
    else
    {
        printf("%d is even", no);
    }
}