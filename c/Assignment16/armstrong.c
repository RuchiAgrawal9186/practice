#include<stdio.h>

int main()
{
    // int no,
    int res,i;
    // printf("enter number : ");
    // scanf("%d", &no);

    for (i = 1; i <= 1000;i++)
    {
        int sum = 0;
        int n = i;
        while (n > 0)
        {
            res = n % 10;
            sum += res * res * res;
            n = n / 10;
            // printf("sum = %d ", sum);
        }

    if(i==sum)
    {
        printf("%d , ",i);
        // printf("%d is armstrong number",no);
    }
    // else
    // {
    //     printf("%d , ",no);
    //     // printf("%d is not a armstrong number", no);
    // }
    }
        
}