#include<stdio.h>

int areaCircle(int a)
{
    return 3.14 * a * a;
}

int main()
{
    int r;
    printf("enter radius of circle : ");
    scanf("%d", &r);
    float a = areaCircle(r);
    printf("area of circle = %2.f", a);
}