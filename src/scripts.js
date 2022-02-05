//this is inline comment
/* this is a multiline comment*/
var myName;
// Setup
var a;
var a;
a = 7;
// Only change code below this line
var a;
a = 7;
var b;
b=a;
var a=9;
var myFirstName="Utkarsh";
var myLastName="Upadhyay";
var a=5;
var b=10;
var c="I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

// Variable declarations
var studlyCapVar;
var properCamelCase="";
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

let catName = "Oliver";
let catSound = "Meow!";

/* task 10*/

const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

/* task 11 */

const sum = 10 + 10;

/* task 12*/

const difference = 45 - 33;

/* tasl 13*/

const product = 8 * 10;

/* task 14*/

const quotient = 66 / 33;

/* task 15*/

let myVar = 87;

// Only change code below this line
myVar++;

/*task 16*/

let myVar = 11;

// Only change code below this line
myVar--;
/*task 17*/

const myDecimal = 5.7;

// Only change code below this line

/*task 17*/
const product = 10*8;

/*task 18*/

const product = 5.0*1;

/*task 19*/

const quotient = 4.4/ 2; // Change this line

/*task 20*/

const remainder = 11%3;

/*task 21*/

let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a+=   12;
b+=  9;
c+= 7;

/*task 22*/

let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a-=  6;
b-=  15;
c-=  1;

/*task 23*/

let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a*= 5;
b*= 3;
c*= 10;

/*task 24*/

let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /=12;
b /= 4;
c /= 11;

/*task 25*/

const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

/*task 26*/

const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

/*task 27*/

const myStr = "FirstLine\n\t\\SecondLine\n\ThirdLine";
 // Change this line

 /*task 28*/

 const myStr = "This is the start." + " This is the end."; // Change this line


 /*task 29*/

 let myStr = "This is the first sentence.";
myStr += " This is the second sentence.";

 /*task 30*/

 // Only change code below this line
const myName = "Utkarsh Upadhyay";
const myStr = "Hello, our name is " + myName + ", how are you?";


 /*task 31*/

 // Change code below this line
const someAdjective = "Utkarsh";
let myStr = "Learning to code is ";
myStr+=someAdjective;

 /*task 32*/

 // Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;


// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

/*task 33*/

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line


/*task 34*/

// Setup
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line

/*task 35*/

// Setup
const lastName = "Lovelace";

// Only change code below this line

const thirdLetterOfLastName = lastName[2]; // Change this line

// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length-1]; // Change this line

/*task 37*/

// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length-2]; // Change this line

/*task 38*/

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = myNoun+" "+myAdjective+" "+myVerb+" " + myAdverb; // Change this line
// Only change code above this line

/*task 39*/

// Only change code below this line
const myArray = ["peanut butter",3];

/*task 40*/

// Only change code below this line
const myArray = [["Bulls", 23], ["White Sox", 45]];

/*task 41*/
const myArray = [50, 60, 70];
var myData = myArray[0];

/*task 42*/

// Setup
const myArray = [18, 64, 99];

// Only change code below this line
myArray[0] = 45;
myArray[1] = 64;
myArray[2] = 99;


/*task 43*/

const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];

/*task 44*/
  // Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog",3])

/*task 45*/

// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line



var removedFromMyArray = myArray.pop();

/*task 46*/

// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArray = myArray.shift();

/*task 47*/

// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line

myArray.unshift(["Paul",35])


/*task 48*/

const myList = [["Chocolate Bar", 15],["Chocolate Bar", 15],["Chocolate Bar", 15],["Chocolate Bar", 15],["Chocolate Bar", 15]];


/*task 49*/

function reusableFunction() {
    console.log("Hi World");
  }
  reusableFunction();

  /*task 50*/

  function functionWithArgs(param1, param2) {
    console.log(param1+param2);
  }
  functionWithArgs(1,2);

  /*task 51 */

  function timesFive(num) {
    return 5 * num;
  }
  
  const answer = timesFive(2);

  /*task 52 */

  function myLocalScope() {
    // Only change code below this line
  
    let myVar;
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);

 /*task 53 */
  function myLocalScope() {
    // Only change code below this line
  
    let myVar;
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);

   /*task 54*/

   // Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  const outerWear="sweater"
  // Only change code above this line
  return outerWear;
}

myOutfit();

  /*task 55*/

// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line

function addFive() {
  sum = sum + 5;
}
// Only change code above this line

addThree();
addFive();

 /*task 56*/

// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);

// Only change code below this line

 /*task 57*/

function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    var item1 =arr.shift();
    
    return item1;
    // Only change code above this line
  }
  
  // Setup
  const testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));

  /*task 58*/

  function welcomeToBooleans() {

    // Only change code below this line.
    
    return true; // Change this line
    
    // Only change code above this line.
    }


  /*task 59*/

  function trueOrFalse(wasThatTrue) {

    // Only change code below this line.
    if(wasThatTrue) {
      return "Yes, that was true";
    }
    return "No, that was false";
  
    // Only change code above this line.
  
  }

   /*task 60*/

   // Setup
function testEqual(val) {
    if (val==12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);


   /*task 61*/

   function testStrict(val) {
    if (val === 7) {
      return "Equal";
    }
    return "Not Equal";
  }

    /*task 62*/

    // Setup
function compareEquality(a, b) {
    if (a ===b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");

   /*task 63*/

   function testNotEqual(val) {
    if (val != 99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  // Change this value to test
  testNotEqual(10);

  /*task 64*/

  function testStrictNotEqual(val) {
    // Only Change Code Below this Line
  
    if (val !== 17) {
  
    // Only Change Code Above this Line
  
      return "Not Equal";
    }
    return "Equal";
  }
  
  // Change this value to test
  testStrictNotEqual(10);

    /*task 65*/

  function testGreaterThan(val) {
    if (val > 100) {  // Change this line
      return "Over 100";
    }
  
    if (val > 10) {  // Change this line
      return "Over 10";
    }

    /*task 66*/

    function testGreaterOrEqual(val) {
      if (val >= 20) {  // Change this line
        return "20 or Over";
      }
    
      if (val >= 10) {  // Change this line
        return "10 or Over";
      }
    
      return "Less than 10";
    }
    
    // Change this value to test
    testGreaterOrEqual(10);

  
    return "10 or Under";
  }
  
  // Change this value to test
  testGreaterThan(10);

 /*task 67*/

  function testLessThan(val) {
    if (val < 25) {  // Change this line
      return "Under 25";
    }
  
    if (val < 55) {  // Change this line
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  // Change this value to test
  testLessThan(10);

   /*task 68*/

   function testLessOrEqual(val) {
    if (val <= 12) {  // Change this line
      return "Smaller Than or Equal to 12";
    }
  
    if (val <= 24) {  // Change this line
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  // Change this value to test
  testLessOrEqual(10);

  /*task 69*/
  function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val <= 50 && val >= 25) {
      return 'Yes';
    }
  
    // Only change code above this line
    return "No";
  }
  
  // Change this value to test
  testLogicalAnd(10);

    /*task 70*/

    function testLogicalOr(val) {
      // Only change code below this line
    
      if (val < 10 || val > 20) {
        return "Outside";
      }
    
      // Only change code above this line
      return "Inside";
    }
    
    // Change this value to test
    testLogicalOr(15);


    /*task 71*/

    function testElse(val) {
      let result = "";
      // Only change code below this line
    
     if (val > 5) {
        result = "Bigger than 5";
      } else {
        result = "5 or Smaller";
      }
    
      // Only change code above this line
      return result;
    }
    
    testElse(4);


   /*task 72*/

   function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    } else if(val < 5) {
      return "Smaller than 5";
    } else {
      return "Between 5 and 10";
    }
  
  }
  
  // Change this value to test
  testElseIf(7);

    /*task 73*/

    function orderMyLogic(val) {
      if (val < 5) {
        return "Less than 5";
      } else if (val < 10) {
        return "Less than 10";
      } else {
        return "Greater than or equal to 10";
      }
    }
    
    // Change this value to test
    orderMyLogic(7);

       /*task 74*/

    function testSize(num) {
      // Only change code below this line
    
      if (num < 5) return "Tiny";
    
      else if (num < 10) return "Small";
    
      else if (num < 15) return "Medium";
    
      else if (num < 20) return "Large";
    
      else return "Huge";
    
      // Only change code above this line
    }
    
    // Change this value to test
    testSize(7);

      /*task 75*/

      function golfScore(par, strokes) {
        // Only change code below this line
      
        if (strokes === 1) return "Hole-in-one!";
      
        else if ((strokes - par) <= -2) return 'Eagle';
      
        else if ((strokes - par) === -1) return 'Birdie';
      
        else if (strokes === par) return 'Par';
      
        else if ((strokes - par) === 1) return 'Bogey';
      
        else if ((strokes - par) === 2) return 'Double Bogey';
      
        else return 'Go Home!';
        // Only change code above this line
      }
      
      // Change these values to test
      golfScore(5, 1); 

        /*task 76*/

      function caseInSwitch(val) {
        var answer = "";
        // Only change code below this line
      
        switch (val) {
          case 1:
            answer = "alpha";
            break;
          case 2:
            answer = "beta";
            break;
          case 3:
            answer = "gamma";
            break;
          case 4:
            answer = "delta";
            break;
        }
      
      
        // Only change code above this line
        return answer;
      }
      
      // Change this value to test
      caseInSwitch(1);

      /*task 77*/

      function switchOfStuff(val) {
        var answer = "";
        // Only change code below this line
      
        switch (val) {
          case "a":
            answer = "apple";
            break;
          case "b":
            answer = "bird";
            break;
          case "c":
            answer = "cat";
            break;
          default:
            answer = "stuff";
        }
      
      
        // Only change code above this line
        return answer;
      }

        /*task 78*/
      
      // Change this value to test
      switchOfStuff(1);

      function sequentialSizes(val) {
        var answer = "";
        // Only change code below this line
      
        switch (val) {
          case 1:
          case 2:
          case 3:
            answer = "Low";
            break;
          case 4:
          case 5:
          case 6:
            answer = "Mid";
            break;
          case 7:
          case 8:
          case 9:
            answer = "High";
            break;
        }
      
      
        // Only change code above this line
        return answer;
      }
      
      // Change this value to test
      sequentialSizes(1);

        /*task 79*/

        function chainToSwitch(val) {
          var answer = "";
          // Only change code below this line
        
          switch (val) {
            case "bob":
              answer = "Marley";
              break;
            case 42:
              answer = "The Answer";
              break;
            case 1:
              answer = "There is no #1";
              break;
            case 99:
              answer = "Missed me by this much!";
              break;
            case 7:
              answer = "Ate Nine";
              break;
          }
        
          // Only change code above this line
          return answer;
        }
        
        // Change this value to test
        chainToSwitch(7);

          /*task 80*/

          function isLess(a, b) {
            // Fix this code
            return a < b;
          }
          
          // Change these values to test
          isLess(10, 15);


       /*task 81*/  

          // Setup
         function abTest(a, b) {
  // Only change code below this line

        if (a < 0 || b < 0) return undefined;

  // Only change code above this line

          return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

 // Change values below to test your code
            abTest(2,2);

        /*task 82*/ 
        
        var count = 0;

function cc(card) {
  // Only change code below this line

  var msg = '';

  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      count = count;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  if (count === 5) msg = "5 Bet";
  else if (count === 0) msg = "0 Hold";
  else if (count === -5) msg = "-5 Hold";
  else if (count === -1) msg = "-1 Hold";
  else if (count === 1) msg = "1 Bet";


  return msg;
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');


 /*task 83*/
 
 // Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

// Only change code below this line.

var myDog = {
  "name": "Lola",
  "legs": 4,
  "tails": 1,
  "friends": ["Sam", "Sarah"]
};

  /*task 84*/


  // Setup
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj.hat;      // Change this line
var shirtValue = testObj.shirt;    // Change this line

  /*task 85*/

var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj["an entree"];   // Change this line
var drinkValue = testObj["the drink"];    // Change this line


/*task 86*/

// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line;

var playerNumber = 16;       // Change this Line
var player = testObj[playerNumber];   // Change this Line


  /*task 87*/

  // Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.name = "Happy Camper";

// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Free Code Camp Campers"]
};

// Only change code below this line.

myDog.name = "Happy Coder"; // Dot notation
myDog["name"] = "Happy Coder"; // Bracket notation









