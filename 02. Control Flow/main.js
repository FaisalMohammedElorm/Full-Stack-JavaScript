let day = "Monday";

switch(day){
  case "Monday": 
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  case "Thursday":
    console.log("Today is Thursday");
    break; 
  case "Friday":
    console.log("Today is Friday");
    break;
  case "Saturday":
    console.log("Today is Saturday");
    break;
  case "Sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("Invalid day");
    break;  // This will be executed if none of the above cases match.  If not provided, it will throw an error.  It's a good practice to include a default case.  Here, it's used to handle invalid inputs.  In a real-world application, you might want to redirect to an error page or handle it differently.  For now, we'll just log an error message.  In a real-world application, you'd want to redirect to an error page.  For example: window.location.href = "error.html";  In this case, make sure to replace "error.html" with the actual URL of your error page.  This will redirect the user to the error page.  If the user tries to access a page that doesn't exist, they'll be redirected to the error page.  This is a basic example of how to handle invalid inputs in a switch statement.
}