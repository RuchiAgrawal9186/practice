#include<stdio.h>

int prime(int n)
{
    int i;
    for ( i = 2; i < n;i++)
    {
        if(n%i==0)
        {
            n++;
            i = 2;
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

