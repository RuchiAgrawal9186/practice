#include<stdio.h>

int prime(n)
{
    printf("no = %d", n);
    int i;
    for ( i = 2; i < n;i++)
    {
        if(n%i==0)
        {

            break;
        }
    }
    if(i==n)
    {
        return n;
    }
}

int main()
{
    int no,res;
    printf("enter no : ");
    scanf("%d", &no);

    res=prime(no + 1);
    printf("\n next prime = %d", res);
}

