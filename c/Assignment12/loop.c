#include<stdio.h>

int main()
{
    int i = 1;
    int j = 10;
    while (i <= 5)
    {
        printf("MysirG\n");
        i++;
    }

    printf("first 10 natural numbers\n");
    while (i <= 10)
    {
        printf("%d , ",i);
        i++;
    }
printf("\nfirst 10 natural numbers in reverse order\n");
    while (j >= 1)
    {
        printf("%d , ",j);
        j--;
    }

     printf("\nfirst 10 odd natural numbers\n");
     i = 1;
     j = 10;
     while (i <= 10)
     {
         printf("%d , ", (2 * i) - 1);
         i++;
     }

    printf("\nfirst 10 odd natural numbers in reverse \n");
    while (j >=1)
    {
        printf("%d , ",2*j-1);
        j--;
    }
 i = 1;
     j = 10;
     printf("\nfirst 10 even natural numbers\n");
    while (i <= 10)
    {
        printf("%d , ",2*i);
        i++;
    }

    printf("\nfirst 10 even natural numbers in reverse \n");
    while (j >=1)
    {
        printf("%d , ",2*j-1);
        j--;
    }
 i = 1;
     j = 10;
    printf("\nfirst 10 natural numbers squares : \n");

    while (i <= 10)
    {
        printf("%d , ",i*i);
        i++;
    }

     printf("\nfirst 10 natural numbers cubes : \n");
 i = 1;
     j = 10;
    while (i <= 10)
    {
        printf("%d , ",i*i*i);
        i++;
    }
 i = 1;
     j = 10;
    printf("\nprint table of 5 :\n");

    while (i <= 10)
    {
        printf("5 * %d = %d\n",i,5*i);
        i++;
    }
}