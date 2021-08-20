console.clear()
console.log("%cDSA ASSIGN By Shubham Upadhay", "color:red;font-family:system-ui;font-size:1rem;font-weight:bold" )
//-------------------Question 1-----------------//
console.log("1. Write a program to find all pairs of an integer array whose sum is equal to a given number?")
 function pairEqSum(inp,sum)
 {
     let count = 0;
     let set = []
     for (i=0;i<inp.length;i++){
         for (j=i+1;j<inp.length;j++){
             let pair = []
             if(inp[i]+inp[j]===sum){
                count++
                pair.push(inp[i],inp[j])
                set.push(pair);
             }
         }
     }
      console.log("In array ", inp , count , "pairs have sum " , sum , " which are " , set)
 }

 let abc = [1,2,3,4,5,6,7,8,9]
 let sum = 7
 pairEqSum(abc,sum)

 /************* Question 2  ***********/
console.log("2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.")
function reverseArrayInPlace(array){
     for(i=0;i<array.length/2;i++){
         [array[i],array[array.length-1-i]]=[array[array.length-1-i],array[i]];
     }
     return array;
 } 
 console.log(reverseArrayInPlace([1,2,3,4,5,6]))

 /*************Question3 *****************/
 console.log("Q3. Write a program to check if two strings are a rotation of each other?")
  function rotationChecker(str1,str2) {
     if(str1.length===str2.length){
       if ((str1+str1).includes(str2)){
           console.log("YES " + str2+" is a rotation of " + str1)
       }
       else{
        console.log("NO " + str2+" is not a rotation of " + str1)
       }
     }
     else{
        console.log("length of strings do not match so " + str2 +" is not a rotation of " + str1)
     }
  }

  rotationChecker("akash","hakas")

   /*************Question4 *****************/
 console.log("Q4. Write a program to print the first non-repeated character from a string")

 function nonRepeat(str){
     let temp = str.split("")
    let output ={}
    let answer = []
    for(i=0;i<temp.length;i++){
        if (output[temp[i]]){
            output[temp[i]] +=1;
        }
    else{
        output[temp[i]]=1
    }}
    var temp2 = Object.entries(output)
    for (j=0;j<temp2.length;j++){
         if (((temp2[j])[1])===1){
             answer.push((temp2[j])[0])
         }
    }
    console.log("First Non repeating character is "  + answer[0] + " and all non-repeating characers are " + answer )

 }
 nonRepeat("shubham")

     /*************Question 5  *****************/
 console.log("Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it")

 function TOHanoi(length,first, last, buffer) {
    if (length >= 1) {
      TOHanoi(length - 1,first, buffer, last);
      console.log('Move the disk from Tower ',first, ' to Tower ', last);        
      TOHanoi(length - 1, buffer, last,first);
    }
    
    return;
  }
  
  TOHanoi(2, "C", "A", "B");


       /*************Question 6  *****************/
console.log("Q6. Write a program to convert postfix to prefix expression.")     
//ab+=>+ab(as soon as u find first opreator then find two opreands)    
function OpreatorCheck(x)
{
    switch (x) {
    case '+':
    case '-':
    case '/':
    case '*':
        return true;
    }
    return false;
}
function postFIXToPreFIX(expression)
{
    let set = [];

    let length = expression.length;
    for (let i = 0; i < length; i++) {
        if (OpreatorCheck(expression[i])) {
            let op1 = set[set.length - 1];
            set.pop();
            let op2 = set[set.length - 1];
            set.pop();
            let temp = expression[i] + op2 + op1;
            set.push(temp);
        }
        else {
            set.push(expression[i] + "");
        }
    }

    let answer = "";
    while (set.length > 0)
        answer += set.pop();
    return answer;
}
console.log(postFIXToPreFIX("AB-DC/-AK/L-"))

 
           /*************Question 7  *****************/
 console.log("Q7. Write a program to convert prefix expression to infix expression.")
  // +ab => a+b as soon as we find first opreator then we will find two opreands   
  function OpreatorCheck(x)
  {
      switch (x) {
      case '+':
      case '-':
      case '/':
      case '*':
          return true;
      }
      return false;
  }
  function preFixToInFix(expression)
  {
      let set = [];
      let length = expression.length;
      for (let i = length-1; i >= 0; i--) {
        if (OpreatorCheck(expression[i])) {
            let op1 = set[set.length - 1];
            set.pop();
            let op2 = set[set.length - 1];
            set.pop();
            let temp = "("+op1 + expression[i] + op2 +")";
            set.push(temp);
        }
        else {
            set.push(expression[i] + "");
        }
      }
      let answer = "";
      while (set.length > 0)
          answer += set.pop();
      return answer;
  }
  console.log(preFixToInFix("*+AZ+-aB-CD"))
  
   
/*******Question 8 *******************/
console.log("Q8. Write a program to check if all the brackets are closed in a given code snippet.")
function bracketNTclosed(str){
    let temp = str.split("")
    let countOFCurl = 0
    let countOFSquare = 0
    let countOFCircle = 0
    for(i=0;i<temp.length;i++){
     if(temp[i]==="{"){countOFCurl++}
     if(temp[i]==="}"){countOFCurl--}
     if(temp[i]==="["){countOFSquare++}
     if(temp[i]==="]"){countOFSquare--}
     if(temp[i]==="("){countOFCircle++}
     if(temp[i]===")"){countOFCircle--}
    }
    if(countOFCircle===0 && countOFCurl===0 && countOFSquare===0)
    {console.log("All Brackets Are closed")}
    if(countOFCurl>0){console.log("{ opned but not closed")}
    if(countOFCurl<0){console.log("} is closed but not opened previously")}
    if(countOFSquare>0){console.log("[ opned but not closed")}
    if(countOFSquare<0){console.log("] is closed but not opened previously")}
    if(countOFCircle>0){console.log("( opned but not closed")}
    if(countOFCircle<0){console.log(") is closed but not opened previously")}
}
bracketNTclosed("{{}()(([][)])]][[])")

/*************Question 9********/
console.log("Q9. Write a program to reverse a stack.")
function StackReversal(stack){
    let ReversedStack = []
    let len = stack.length
    for(i=0;i<len;i++)ReversedStack.push(stack.pop())
    console.log("Your stack is reversed as ",ReversedStack)
}
 StackReversal(["a","b","c","d"])

 /*************Question 10********/
 console.log("Q10. Write a program to find the smallest number using a stack")
 function SmallestInStack(stack){
 let smallest = stack.pop();
 let len = stack.length
 for(let i=0;i<len;i++){
     let temp = stack.pop()
     if(temp<smallest)smallest=temp
 }
 console.log("The smallest value in Your stack is ",smallest)
  }
   SmallestInStack([2,3,4,5,6])



