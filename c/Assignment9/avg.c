#include<stdio.h>

int main()
{
    int sub1, sub2, sub3, sub4, sub5, res;
    printf("enter 5 subject marks : ");
    scanf("%d%d%d%d%d", &sub1, &sub2, &sub3, &sub4, &sub5);
    res = (sub1 + sub2 + sub3 + sub4 + sub5) / 5;
    if(res>=33)
    {
        printf(" %d = passed", res);
    }
    else
    {
printf(" %d = failed", res);
    }
}