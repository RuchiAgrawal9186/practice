#include<stdio.h>
int main()
{
    int r;
    float res;
    printf("enter radius:");
    scanf("%d", &r);
    res = 2 * 3.14 * r;
    printf("circumfrenece of circle = %f", res);
}