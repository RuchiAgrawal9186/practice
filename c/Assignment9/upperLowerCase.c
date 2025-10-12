#include<stdio.h>
int main()
{
    char ch;
    printf("enter charcter in upper or lower case : ");
    scanf("%c", &ch);
    if(ch>='A' && ch<='Z')
    {
        printf("%c is uppercase", ch);
    }
    else if(ch>='a' && ch<='z')
    {
        printf("%c is lowercase", ch);
    }
else
{
    printf("not alphabet");
}
}