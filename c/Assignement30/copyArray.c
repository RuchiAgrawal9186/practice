#include<stdio.h>

int main()
{
    int a[10];
    int b[10];

    printf("enter array values : ");
    for (int i = 0; i < 10;i++)
    {
        scanf("%d", &a[i]);

    }
    printf("before copying array B from array A \n");
for (int j = 0; j < 10; j++)
{
   printf("%d , ", b[j]); 
}
for (int i = 0; i < 10; i++)
{
    b[i] = a[i];
}

printf("\nafter copying array B from array A \n");
for (int j = 0; j < 10; j++)
{
   printf("%d , ", b[j]); 
}
}