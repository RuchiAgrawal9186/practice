#include<stdio.h>


int greater(int arr[],int n)
{
    int max = 0;
    printf("\nenter %d values : ", n);
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);

        if (arr[i]>max)
        {
            max = arr[i];
            /* code */
        }
        
    }

    return max;
}


int main()
{
    int arr[]={} ,n,res;

    printf("enter size of array : ");
    scanf("%d", &n);

    res = greater(arr, n);
    printf("gretes number from this array = %d", res);
}