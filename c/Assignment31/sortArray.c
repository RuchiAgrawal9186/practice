#include<stdio.h>


int greater(int arr[],int n)
{
    int temp;
    printf("\nenter %d values : ", n);
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
    }

     for (int i = 0; i < n; i++)
    {

        for (int j = i + 1; j < n;j++)
        {
            if(arr[i] >= arr[j])
            {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    for (int i = 0; i < n; i++)
    {
        printf(" %d , ", arr[i]);

        
    }

   
}


int main()
{
    int arr[]={} ,n,res;

    printf("enter size of array : ");
    scanf("%d", &n);

    res = greater(arr, n);
    // printf(" %d ", res);
}