/*** Write a script that will inform the user what they should be wearing based on
two conditions: the temperature and the event type. This information will be
gathered through prompts.
  * (Renee McLeod)
 * (November 26, 2018)*/


//Calculations and Variables
var event = prompt("Enter the type of event");
var temp = prompt("Enter the temp from outside");
var result1;
var result2;
var result;


function getEvent(clothing) {
	if (clothing === "casual") {
	result1 = "should wear something comfy,";
  return result1;
	}
	else if (clothing === "semi-formal") {
	result1 = "should wear a polo,";
  return result1;
	}
	else if (clothing === "formal"){
	result1 =  "should wear a suit,";
  return result1;
	}
}
function getTemp(temp) {
		if (temp >= 70) {
		result2 = "no jacket will be needed.";
    return result2;
		}
		else if (temp >= 54 && temp < 70) {
		result2 = "bring a jacket.";
    return result2;
		}
		else if (temp <= 54){
		result2 = "bring a coat.";
    return result2;
		}

}
getEvent(event);
getTemp(temp);

result = `Since it is ${temp} and you are going to a ${event} event, you ${result1} and ${result2}`;
console.log(result);
