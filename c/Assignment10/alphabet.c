#include<stdio.h>
int main()
{
    char ch;
    printf("enter charcter,number or any special character : ");
    scanf("%c", &ch);
    if(ch>='A' && ch<='Z')
    {
        printf("its uppercase");
    }
    else if(ch>='a' && ch<='z')
    {
        printf("its lowercase");
    }
    else if(ch=='0' && ch=='9')
    {
        printf("its digit");
    }
    else
    {
        printf("its special charcter");
    }
}