#include<stdio.h>

int main()
{
    int a = -1, b= 1,no,c;
    printf("enter numer to find nth term fionacci : ");
    scanf("%d", &no);
    for (int i = 0; i < no;i++)
    {
        c = a + b;
        a = b;
        b = c;

        printf("%d , ", c);
    }printf("\n nth term fionacci = %d , ", c);
}