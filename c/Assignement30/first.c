#include<stdio.h>

int main()
{
    int a[10],temp,j;

    printf("enter array values : ");
    for (int i = 0; i < 10;i++)
    {
        scanf("%d", &a[i]);

    }
for (int j = 0; j < 10; j++)
{
    for (int i = j + 1; i < 10;i++)
    {
          if(a[j]>=a[i])
          {
              temp = a[j];
              a[j] = a[i];
              a[i] = temp;
          }
    }
}

printf("after sorting array\n");
for (int j = 0; j < 10; j++)
{
   printf("%d , ", a[j]); 
}
printf("second largest value = %d\n", a[9]);
printf("second smalles value = %d\n", a[1]);
}

    