// voulme of cuboid

#include<stdio.h>
int main()
{
    int res, l, b, h;
    printf("enter length,w idth and height : ");
    scanf("%d%d%d", &l, &b, &h);
    res = l * b * h;
    printf("voulme of cuboid = %d", res);
}