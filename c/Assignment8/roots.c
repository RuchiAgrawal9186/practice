#include<stdio.h>
int main()
{
    int a, b, c, d;
    printf("enter a,b and c value : ");
    scanf("%d%d%d", &a, &b, &c);
    d = b * b - 4 * a * c;
    if(d>0)
    {
        printf("real and distinct roots");
    }
    else if(d<0)
    {
        printf("imagnary roots");
    }
    else
    {
        printf("real and equal roots");
    }
    printf("%d", d);
}