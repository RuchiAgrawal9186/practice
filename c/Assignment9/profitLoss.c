#include <stdio.h>
int main()
{
    float cp, sp,res;
    printf("enter cost price and selling price : ");
    scanf("%f%f", &cp, &sp);
    if(cp<=sp) // profit
    {
        res = (sp - cp) / cp * 100;
        printf("profit %.2f ", res);
    }
    else
    {
 res = (cp - sp )/ cp * 100;
        printf("loss %.2f ", res);
    }
    
}