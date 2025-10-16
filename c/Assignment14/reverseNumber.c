#include<stdio.h>

int main()
{
    int no,p=0;
    printf("enter a number : ");
    scanf("%d", &no);

    while(no)
    {
        p = p * 10 + no % 10;
        no = no / 10;
    }
    printf("reverse no = %d", p);
}