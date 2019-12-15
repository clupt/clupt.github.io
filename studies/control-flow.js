/** 
 * CONTROL FLOW:
 * 0.The control flow refers to the order in which the statements of a program are
 * executed. A program with more than one statement will read from top to 
 * bottom, unless presented with a condition that requires the order
 * of the code execution to change. Conditional statements are considered 
 * Control Structures. They alter the control flow of our code by essentially
 * posing true/false questions to it and executing statements based on the 
 * answers.
 * 
 * The primary way to get our code to execute based on a condition is to use an 
 * if-elseif-else chain. This presents a condition that if met, executes the
 * code block and ends the chain. However, if the first condition is NOT met,
 * it proceeds to a secondary condition, using the else if keyword. As before,
 * this condition is determined to be true or false, and the code block that
 * follows is either executed or skipped. This if-elseif-else chain can have
 * any number of else if statements. If none of these conditions are
 * met, however, the chain proceeds to an else statement. This acts as the 
 * default condition, which will execute at the end when no other condition has 
 * been met. Else statements end the chain.
 */
 
 //1. If
 
/**
 * The if keyword is used to present the code with a condition. This condition
 * will always resolve to a boolean value - either true or false.
 */
  if (true){
      console.log('Our condition was met and this code block is executed.');
  }
/** 
 * In the example above, the boolean value of true is determined to be true,
 * and as a result the code block in the {} that follows in run. Had the
 * condition been false, that code block would NOT have been executed.
 */
  var age = 18;
  if (age < 25){
      console.log('Not old enough to rent a car.');
  }
/** 
 * In this example, the value of a variable is being compared to a set value 
 * with the logical (less than) operator <. That value was less than 25, so the 
 * condition was met and the following code block was executed.
 */
 
 //2. Else-if
 
/** Unlike the if statement, we can present the code with any number of else if
 * statements. Since the first condition was not met, how about this one? That
 * didn't work? Okay, how about this one? Etc... 
 */
 
 var temp = 72;
    if (temp <= 40) {
        console.log('Today is cold!');
    } else if (temp >40 && temp <=71) {
        console.log('Today is pleasant');
    } else if (temp === 72) {
        console.log('Today is perfect!');  //=> prints "Today is perfect!' //
    }
    
/**
 * In the example above, the first two conditions were not met and so the code
 * that followed did not execute. However, the third condition was met, and so
 * the code block that followed was executed.
 */
  
 //3. Else
 
/**
 * But what happens when none of our conditions are determined to be true? The 
 * end condition, or default, is presented with an else statement. This 
 * condition will only be reached if all other conditions are false. If reached
 * it will be true simply by the virtue of everything before it having been 
 * false, and will execute whatever code we give it, ending the control flow.
 * Else statements do not take a condition as their argument, but instead are
 * inherently true if reached.
 */
  
   var temp2 = 93;
    if (temp2 <= 40) {
        console.log('Today is cold!');
    } else if (temp2 >40 && temp2 <=71) {
        console.log('Today is pleasant');
    } else if (temp2 === 72) {
        console.log('Today is perfect!');
    } else if (temp2 > 72 && temp2 < 80){
        console.log('Today is warm');
    } else {
        console.log('Today is too HOT!'); //=> prints 'Today is too HOT!'//
    }
  
  //4. Switch
 
/**
 * Another way to control the flow of our code with conditions if through the
 * use of the switch construct. Like if-elseif-else chains, a switch statement 
 * determines the truth of a condition and alters the control flow accordingly.
 * The syntax is different though. Switch constructs take a number of case
 * labels inside the code block opened by the switch. If the case is met, then 
 * it will execute the code block. This is NECESSARILY followed by a 'break;'.'
 * The break is used to stop the code if that case was met. The control flow 
 * here is still from top to bottom, so if the first case was not met, the break
 * does not execute, and the next case is evaluated. Switch statements also 
 * take a default case, that will execute if all other cases that preceeded it 
 * were not met.
 */
 
 var weather = 'rainy';
 switch (weather){
    case 'sunny': 
        console.log('Do not forget sunscreen.');
        break;
    case 'cloudy':
        console.log('Nice day for a walk.');
        break;
    case 'rainy': 
        console.log('Grab a poncho.'); //=> prints 'Grab a poncho'//
        break; 
    default:
        console.log('Weather conditions unknown.');
        break;
  }
  
 /** 
  * The variable weather above is compared to the case labels, and upon finding
  * a matching value, the code block of that case is executed. If no matching
  * value is found, the default case will be executed.
  */