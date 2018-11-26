/*** Write a script that will inform the user what they should be wearing based on
two conditions: the temperature and the event type. This information will be
gathered through prompts.
  * (Renee McLeod)
 * (November 26, 2018)*/
 
imput java.util.Scanner';
public class WhatToWear; {
    public static void main(String[] args) {
    //Create a Scanner
    Scanner input = new Scanner(System.in);
    
    //Print opening statement
    System.out.println("What should I wear?");
    
    //Print Event Type
    System.out.println("What type of event is this?");
    
    //Print Temperature Outside
    System.out.println("What is the temperature outside?");
     
    //Calculations and Variables
    var event = prompt("Enter the type of event");
    var temp = prompt("Enter the temp from outside");
    	
    
function getEvent(clothing); {
	if (casual) {
	document.write ("wear something comfy.");
	}
	else if (semi-formal) {
	document.write ("wear a polo.");
	}
	else if (formal){
	document.write ("wear a suit");
	}
}  
function getTemp(weather); {
		if (temp >= 70) {
		document.write ("No jacket will be needed.");
		}
		else if (temp >= 54) {
		document.write ("Bring a jacket.");
		}
		else if (temp <= 54){
		document.write ("Bring a coat.");
		}
		
}
	
	getEvent(clothing);
	getTemp(weather);
