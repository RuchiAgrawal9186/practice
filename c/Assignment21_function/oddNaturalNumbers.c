#include<stdio.h>

void OddNaturalNumbers(int no)
{
    for (int i = 1; i <= no;i++)
    {
        printf("%d , ", 2*i-1);
    }
}

int main()
{
    int no;
    printf("enter no : ");
    scanf("%d", &no);
    OddNaturalNumbers(no);
    
}