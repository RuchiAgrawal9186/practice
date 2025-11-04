#include<stdio.h>

void oddEven(int no)
{
if (no%2==0)
{
    printf("%d is even no", no);
}
else
{
    printf("%d is odd no", no);
}

}
void isPrime(int no)
{
    int i;
    for ( i = 2; i < no;i++)
    {
        if(no%i==0)
        {
            printf("\n%d is not prime number", no);
            break;
        }
    }
    if(i==no)
    {
        printf("\n%d is prime number", no);
    }
}
void factorial(int no)
{
    int fact = 1;
    for (int i = no; i >= 1;i--)
    {
        fact *= i;
    }
    printf("\nfactorial of %d = ", fact);
}

void LCM(int a,int b)
{
    for (int i = a > b ? a : b; i <= a * b;i++)
    {
        if(i%a==0 && i%b==0)
        {
            printf("\nLCM = %d", i);
            break;
        }
    }
}
int main()
{
    int no;
    int a, b;
    printf("enter no : ");
    scanf("%d", &no);
    printf("enter two no for LCM AND SWAP : ");
    scanf("%d%d", &a, &b);
    oddEven(no);
    isPrime(no);
    factorial(no);
    LCM(a, b);

    printf("\nbefore swap a = %d , b = %d", a, b);
    a = a + b;
    b = a - b;
    a = a - b;

    printf("\nafter swap a = %d , b = %d", a, b);
}