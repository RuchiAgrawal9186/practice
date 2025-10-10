//  cost price , selling price find profi and loss of 25 bananas

#include<stdio.h>
int main()
{
    int cp, sp, res;
    printf("enter cost price and selling price");
    scanf("%d%d", &cp, &sp);
    printf("profit/loss = %d", 25 * (sp - cp) / 12);
}