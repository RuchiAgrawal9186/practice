// avarage of three numbers

#include<stdio.h>
int main()
{
    int a, b, c;
    float res;
    printf("enter three numbers:");
    scanf("%d%d%d", &a, &b, &c);
    res = (a + b + c) / 3.0;
    printf("avarage of 3 numbers = %f", res);
}