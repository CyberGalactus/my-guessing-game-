Hi Edu!

Updated 14-2-2023

Almost there! You have an array, but you aren't using it!

Line 14 sets the value of currentLevel:

   let currentLevel = 0;

Lne 18 then uses it to get a value from te array:
   let maximum = levels[currentLevel];

So this will always return levels[0] - you need to ask the user what level they want to use. Create a prompt showing the different levels, and ak the user to enter what level they want - 10, 50, 100, 200 or 500.

You'll need to validate the user choice - you can use the includes() function - https://www.w3schools.com/jsref/jsref_includes_array.asp - to see if the user choice is one of the values in the array.

You've also got:

   if (guess === "q") {
      alert("OK. BYE");
      break;
    }
a few times - you only really need it once!


---------------------------------------------------------------------------

Nice work, the game works well and I like how the user can enter their own maximum number. The major problem is it lacks an array, which is one of the requirements of the assignment.

The easiest way to fix this is to let the user choose the max number from an array, rather than enter their own number. Create an array of maximum numbers:

  let maxNumbers = [10, 20, 50, 100, 1000]; or somethign similar.

then at line 9 ask, make a while loop and ask the user to chose which one they want

  let maximum = parseInt(prompt("You can choose to guess a number up to  10, 20, 50 or 1000.\nEnter the maximum number!"));

You will then need a function to test if the number they entered is in the array - look at this link - https://www.w3schools.com/jsref/jsref_includes_array.asp . If it is in the array you can continue if not the while loop should repeat.

Could you try to add an array (and have a look at the other notes below) and let me know when I should have another look?


*************************************

CRITERIA FOR GRADING

*************************************

GODKÄNT:
-------------------------------------

Constant or let variable: ✅ 

Array: ✅

Random selection from array: ❌

Loops:
  For: ❌ Not really required for this project

  While: ✅
  Nice!

Comparison with user entered data: ✅

Final message: ✅

-------------------------------------

VÄLGODKÄNT:
-------------------------------------

Comparison with an array: ❌

Nested logic: ✅

Input validation: ✅
user can enter letters - have a look at adding some regex for numbers only

Cancel button handling: ❌
Add a test if (guess == null)

Semantic variable naming: ✅

Code style: ✅
  Indentation gets a bit inconsistent at the end, but pretty good