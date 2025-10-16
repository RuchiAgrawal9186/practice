#include<stdio.h>

int main()
{
    int no,count=0;
    printf("enter no : ");
    scanf("%d", &no);

    for (int i = 2; i < no;i++)
    {
        if(no%i==0)
        {
            printf("%d is not a prime number",no);
            break;
        }
        count++;
    }
    if(count==no)
    {
printf("%d is a prime number",no);
    }
}