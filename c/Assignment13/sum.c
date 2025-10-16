#include<stdio.h>

int main()
{
    int n, sum = 0, oddSum = 0,evenSum = 0,squareSum=0,cubeSum=0;

    printf("enter a number : ");
    scanf("%d", &n);

    for (int i = 1; i <= n;i++)
    {
        sum += i;
    }
    printf("sum of %d natural numbers = %d\n", n, sum);
    for (int i = 1; i <= n;i++)
    {
        evenSum += 2*i;
    }
    printf("sum of %d even natural numbers = %d\n", n, evenSum);
    for (int i = 1; i <= n;i++)
    {
        oddSum += 2*i-1;
    }
    printf("sum of %d odd natural numbers = %d\n", n, oddSum);

    for (int i = 1; i <= n;i++)
    {
        squareSum += i*i;
    }
    printf("sum of %d square natural numbers = %d\n", n, squareSum);

    for (int i = 1; i <= n;i++)
    {
        cubeSum += i*i*i;
    }
    printf("sum of %d cube natural numbers = %d\n", n, cubeSum);
}

