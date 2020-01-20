"use strict"
//SYNTAX OF TERNARY OPERATOR

/*     variable=(condition)
                ? //true body
                : //false body

   */
  
   
   //to find number is even or odd

let numValue=7;
let result=(numValue%2==0)
     //  ? console.log(true); //SyntaxError: Unexpected token ';' 
     ?console.log("even")  
     : console.log("odd")

numValue=8;
result=(numValue%2==0)
       ? console.log("even")
       : console.log("odd")
