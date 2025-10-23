#include<stdio.h>


int greater(int arr[],int n)
{
    int min = __INT_MAX__;
    printf("\nenter %d values : ", n);
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);

        if (arr[i]<min)
        {
            min = arr[i];
            /* code */
        }
        
    }

    return min;
}


int main()
{
    int arr[]={} ,n,res;

    printf("enter size of array : ");
    scanf("%d", &n);

    res = greater(arr, n);
    printf("smallest number from this array = %d", res);
}