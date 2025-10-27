#include<stdio.h>

void NaturalNumbers(int no)
{
    for (int i = 1; i <= no;i++)
    {
        printf("%d , ", i);
    }
}

int main()
{
    int no;
    printf("enter no : ");
    scanf("%d", &no);
    NaturalNumbers(no);
    
}