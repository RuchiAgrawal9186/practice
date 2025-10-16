#include<stdio.h>

int main()
{
    int count = 0,no,r;
    printf("enter a number to count digit of that number : ");
    scanf("%d", &no);
    while(no>0)
    {
        r= no % 10;
        count++;
        no = no / 10;
    }

    printf("total digit of this number = %d", count);
}