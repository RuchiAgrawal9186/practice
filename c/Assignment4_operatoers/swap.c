#include<stdio.h>
int main()
{

    // using of third variable 

    int a = 10;
    int b = 20;
    int temp;

    // printf("before awap a=%d , b=%d\n", a, b);

    // temp = a;
    // a = b;
    // b = temp;

    // printf("after awap a=%d , b=%d\n", a, b);

    // using without third variable

    // a = a + b;  // a=30
    // b = a - b;  // b= 30-20 -- 10
    // a = a - b;  // a = 30-10 -- 20

    // without using +,- operator

    // a = a * b;
    // b = a / b;
    // a = a / b;

    // without using arithmatic operator

    // a = a ^ b;
    // b = a ^ b;
    // a = a ^ b;

    // in single line arithmatic opration

    a = (a + b) - (b = a);  // (10+20)-(b=10) // =10
                              // a=  //   30 - 10 = 20

    printf("after awap a=%d , b=%d\n", a, b);
}