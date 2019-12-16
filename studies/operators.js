/**
 * OPERATORS:
 * 0. Operators perform some action on data. The data they are acting on are called
 * operands. The number of operands being operator on classifies the type of operator. 
 * Unary operators take one operand. Binary operators take two. The ternary operator uses
 * three operands.
 * 
 * Order of operations or Operator precedence determines the order in which operators
 * are evaluated. Operators with higher precedence are evaluated first. 
 */

 /**
 * 1. Assignment Operator
 * The Assignment operator is used to initialize variables.
 * 
 * =
 * 
 */

let something = 'Something';
console.log(something);//==> prints Something
 
 // 2. Arithmetic Operators are used to perform arithmetic on elements.
 
 /** 
 * + adds 
 * - subtracts
 * * multiplies
 * / divides
 * % finds the remainder of 
 * ** exponentiates
 * += same as var num = num + 5
 * -= same as var num = num - 5
 */
 
 let one = 1;
 let two = 2;
 let three = 3;
 let ten = 10;
 
 console.log(one + two);//==> prints 3
 console.log(ten - two);//==> prints 8
 console.log(ten * two);//==> prints 20
 console.log(ten / two);//==> prints 5
 console.log(ten % three);//==> divides 10/3 and prints the remainder 1
 console.log(ten ** two);//==> prints 100
 console.log(ten += two);//==> prints 12
 
 /**
 * 3. Comparison Operators
 * Return a boolean value when the expression is evaluated. Strict equality and
 * loose equality are important to note here. Strict equality does not account for
 * implicit type coercion that JavaScript is performing. Loose equality does.
 * 
 * < is less than
 * > is greater than
 * <= is less than or equal to
 * >= is greater than or equal to
 * == is loosely equal to
 * === is strictly equal to
 * != is NOT loosely equal to
 * !== is NOT strictly equal to
 */
 
 console.log(10 < 2);//==> prints false
 console.log(Infinity > 4);//==> prints true
 console.log(5 >= 5);//==> prints true
 console.log(3 == '3');//==> prints true
 console.log(3 === '3');//==> prints false
 console.log('10' != 10);//prints false
 console.log('ten' !== 10);//==> prints true
 
 /**
 * 4. Logical Operators
 * These perform a logical comparison that evaluates to a boolean value.
 * 
 * &&: and. returns true if and only if BOTH of the operands are ture.
 * ||: or. returns true if at least one of the operands is true.
 */
 
 console.log(1>2 && 2<3);//==> this prints false, because only half is true
 console.log(1>2 || 2<3);//==> this prints true, because at least half is true
 
 
 /**
 * 5. Unary Operators (!, typeOf, -)
 * This operator takes only one operand.
 * typeof: returns a string of that value's type.
 * ! : called the bang operator. Negates the value of a boolean expression.
 * - :
 * ++ : increments
 * -- : decrements
 */
 
 console.log(!true);//==> prints false
 console.log(typeof 9);//==> prints number
 console.log(typeof 'nine');//==> prints string
 let i = 4;
 i++;
 console.log(i);//==> prints 5
 i--;
 console.log(i);//==>prints 4

 /**
 * 
 * 6. Binary operator
 * This operator takes two operands. The comparison and arithmetic operators discussed above are binary.
 * 
 * 7. Ternary Operator (a ? b:c)
 * Sometimes called the conditional operator. This operator takes three operands. It can be considered as
 * shorthand for an if statement.
 * 
 * The syntax is:
 * condition ? do this if the condition is true : do this if the condition is false
 */
 
 let city = 'New Orleans';
 city === 'New Orleans' ? console.log('I am home') : console.log('Where am I?');
 //==> prints I am home