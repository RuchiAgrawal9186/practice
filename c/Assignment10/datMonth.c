#include<stdio.h>
int main()
{
    int no;
    printf("enter any month number : ");
    scanf("%d", &no);
    if(no>=1 && no<=12)
    {
if(no==1 || no==3 || no==5 || no==7 || no==8 || no==10 || no==12)
    {
        printf("31 days\n");
    }
    else
    {
        if(no==2)
        {
printf("28/29 days\n");
        }
        else
        {
printf("30 days\n");
        }
        
    }
    }
    else
    {
        printf("invalid month number enter from 1 to 12 month");
    }
    
}