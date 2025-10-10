#include<stdio.h>
int main()
{
    int a,res;
    printf("enter number for square:");
    scanf("%d", &a);
    res = a * a;
    printf("square = %d", res);

    areaRectangle();
    areaCircle();
}

int areaRectangle()
{
 int l,b,res;
    printf("enter two number:");
    scanf("%d%d", &l,&b);
    res = l * b;
    printf("area of rectangle = %d", res);
}
int areaCircle()
{
int a;
float res;
printf("enter number:");
scanf("%d", &a);
res = 3.14 * a * a;
printf("area of circle = %f", res);
}