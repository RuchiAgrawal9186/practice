#include<stdio.h>

int main()
{
    for (int i = 1; i <= 5;i++)
    {
        printf("MysirG\n");
    }

    printf("first 10 natural numbers\n");
    for (int i = 1; i <= 10;i++)
    {
        printf("%d , ",i);
    }
printf("\nfirst 10 natural numbers in reverse order\n");
    for (int i = 10; i >= 1;i--)
    {
        printf("%d , ",i);
    }

     printf("\nfirst 10 odd natural numbers\n");
    for (int i = 1; i <= 10;i++)
    {
        printf("%d , ",(2*i)-1);
    }

    printf("\nfirst 10 odd natural numbers in reverse \n");
    for (int i = 10; i >=1;i--)
    {
        printf("%d , ",2*i-1);
    }

     printf("\nfirst 10 even natural numbers\n");
    for (int i = 1; i <= 10;i++)
    {
        printf("%d , ",2*i);
    }

    printf("\nfirst 10 even natural numbers in reverse \n");
    for (int i = 10; i >=1;i--)
    {
        printf("%d , ",2*i-1);
    }

    printf("\nfirst 10 natural numbers squares : \n");

    for (int i = 1; i <= 10;i++)
    {
        printf("%d , ",i*i);
    }

     printf("\nfirst 10 natural numbers cubes : \n");

    for (int i = 1; i <= 10;i++)
    {
        printf("%d , ",i*i*i);
    }

    printf("\nprint table of 5 :\n");

    for (int i = 1; i <= 10;i++)
    {
        printf("5 * %d = %d\n",i,5*i);
    }
}