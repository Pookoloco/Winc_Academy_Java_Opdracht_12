let colors = ["yellow", "blue" ,"red" , "orange"];

let colorArray = 0;

while (colorArray < 4) {

    console.log(colors[colorArray]);
    colorArray++;
  }

  
  for (colorArray = 0; colorArray < 4; colorArray++) {

    console.log(colors[colorArray]);
  }



  colors.forEach((element) => console.log(element));





/* 1. Hoeveel regels neemt mijn for loop en mijn while loop in beslag? Met de closing bracket } meegerekend 
   heeft mijn while loop 6 regels. Met de array declaratie en closing bracket meegerekend heeft de mijn
   for loop 4 regels.

2. Hoeveel regels neemt mijn forEach method in beslag? 1 regel
3. Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop?
   Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom? Hoe minder regels code hoe overzichtelijker
   het ook blijft. Bij for of while loops is de kans op crashes groter dan bij het gebruik van element benamingen.
4. Kun je een array method gebruiken op een object? Het antwoord is nee.
   Stel je hebt een object met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je tóch die 45 
   properties kunt console.loggen met een loop: Looping through the properties of an object.
   Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. Ben je nu aan het itereren? Ja het blijft nog steeds iets herhaaldelijk doen
 */

   const object = { 
       Samsung: "A52s",
       Iphone: "13",
       Nokia: "3310",
       Honor: "View 10",
       Google: "Pixel", 
    
    };

   for (const property in object) {
     console.log(`${property}: ${object[property]}`);

   }