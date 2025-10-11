#include<stdio.h>

int main()
{
    int no,res;
    printf("enter three digit number : ");
    scanf("%d", &no);
    res = no % 10;
    printf("rotate one position right = %d", res * 100 + no / 10);
}