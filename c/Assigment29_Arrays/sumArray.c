#include<stdio.h>

int main()
{
    int a[10], sum = 0, evenSum = 0,oddSum=0,max=0,min=__INT_MAX__;
    float avg;
    printf("enter array values : ");
    for (int i = 0; i < 10;i++)
    {
        scanf("%d", &a[i]);
        sum = sum + a[i]; // first question calculate sum of all numbers
        avg = sum / 10; // second ques avg of all nu,bers

        if(a[i]%2==0)  // third ques even and odd number sum calculate
        {
            evenSum += a[i];
        }
        else
        {
            oddSum += a[i];
        }

        if(a[i]>max)
        {
            max = a[i];
        }

        if(a[i]<min)
        {
            min = a[i];
        }


    }
    printf("sum of all numbers = %d\n", sum);
    printf("avg of all numbers = %.2f\n", avg);
    printf("even number sum = %d\n", evenSum);
    printf("odd number sum = %d\n", oddSum);
    printf("max number = %d\n", max);
    printf("min number = %d\n", min);

}