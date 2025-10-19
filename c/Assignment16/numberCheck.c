#include<stdio.h>

int main()
{
    int a = -1, b = 1,c,no;

    printf("enter a no : ");
    scanf("%d", &no);

    while(1)
    {
        c = a + b;
        if(c>=no)
        {
            break;
        }
        a = b;
        b = c;
    }
    if(c==no)
    {
        printf("its in number");
    }
    else
    {
        printf("its not in number");
    }
}