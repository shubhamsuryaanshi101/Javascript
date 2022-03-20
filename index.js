//1. Addition of two nos.
function sum(a,b)
{
    let z = (a + b);
    console.log("Addition is -",z)
}
sum(10,30);

//2. Subtraction of two nos.
function sub(a,b)
{
    let z = (a - b);
    console.log("Subtraction is -",z)
}
sub(20,3);

//3. Multiplication of two nos.
function mul(a,b)
{
    let z = (a * b);
    console.log("Multiplication is -",z)
}
mul(10,30);

//4. Division of two nos.
function div(a,b)
{
    let z = (a / b);
    console.log("Division is -",z)
}
div(88,4);

//5. power of nos.
function power(a,b)
{
    let z = (a + b)**2;
    console.log("Power of given nos -",z)
}
power(10,2);

//6. Fibonacci Series
function fibo(n)
{
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');
console.log(n1); // print 0
console.log(n2); // print 1

nextTerm = n1 + n2;

while (nextTerm <= n) {

    // print the next term
    console.log(nextTerm);

    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
}
}
fibo(10);
