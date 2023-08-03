

"use strict"

var customer = prompt(`Please write your code:`)
var beginning = parseInt(prompt(`The customer's beginning meter`))
var ending = parseInt(prompt(`The customer's ending meter`))

const MAX_METER =999999999


//RESIDENTIAL

var residential =((ending - beginning) / 10*0.0005+5)

var Max = ((MAX_METER-beginning +ending)/10*0.0005 +5)


if ((ending > beginning) && customer === `r` || customer === `R` )  {alert(residential)}

 else if ( (ending < beginning) && customer === `r` || customer === `R` ) {alert(Max)}




 //COMMERCIAL
 
 var Max_commerce = ((MAX_METER-beginning +ending)/10)

 var fourMillion = 4000000

 var comGallon =((ending - beginning)/10)
 
 var lessAdd =fourMillion>=comGallon

 var additional = (comGallon-fourMillion)*0.00025
 
 var commercial =(additional +1000)

var maxGallon =((Max_commerce -fourMillion)*0.00025+1000)


 if ((fourMillion>=comGallon>=0)    && (ending > beginning) && customer === `c` || customer === `C`)
{console.log(`1000 $`)}

   else if ((ending > beginning)  && (comGallon >fourMillion) &&   customer === `c` || customer === `C` )
   {console.log(commercial)}


   else if ((ending < beginning) && (Max_commerce > fourMillion) &&  customer === `c` || customer === `C`) 
   {console.log(maxGallon)}


   

 //INDUSTRIAL


 /* $1000.00 if usage does not exceed 4 million gallons; 
 $2000.00 if usage exceeds 4 million gallons but does not exceed 10 million gallons; 
 and $2000.00 plus $0.00025 for each additional gallon if usage exceeds 10 million gallons.*/
 

 var Max_commerces = ((MAX_METER-beginning +ending)/10)
 
 var fourMillion = 4000000

 var tenMillion = 10000000

 var comGallons=((ending - beginning)/10)
 
 var lessAdds =fourMillion>=comGallons

 var additionals = (comGallons-tenMillion)*0.00025

 var commercials =(additionals +2000)

 var maxGallons =((Max_commerces -tenMillion)*0.00025+2000)



if   ( (ending > beginning) &&  (fourMillion>=comGallons) && customer === `i` || customer === `I`)
{console.log(`1000$`)}

  else if ( (ending > beginning) &&  (tenMillion >= comGallons )  && customer === `i` || customer === `I`)
 {console.log(`2000$`)}

 else if ((ending > beginning) &&   (comGallons>tenMillion) &&  customer === `i` || customer === `I` )  
 {console.log(commercials)}

  else if ( (ending < beginning) && (Max_commerces > tenMillion)  && customer === `i` || customer === `I`) 
 {console.log(maxGallons)}




















 