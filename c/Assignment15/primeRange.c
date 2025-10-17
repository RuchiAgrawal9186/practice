#include <stdio.h>

int main()
{
    int start, end,j;
    printf("enter two numbers : ");
    scanf("%d%d", &start, &end);
    for (int i = start; i < end;i++)
    {
        for (j = 2; j <= end - 1;j++)
        {
            if(i%j==0)
            {
                break;
            }
        }
        if(i==j)
        {
printf("%d , ", i);
        }
        
    }
}