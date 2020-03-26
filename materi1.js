// Create conditionals statement that could print to the console:
// 'Excellent', if score is HIGHER THAN 80
// 'Good Job' if score is IN THE RANGE OF 60  UNTIL 80 (60 and 80 is included)
// 'Don't give up' if score is BELOW 60

// let nilai = 60 

// if (nilai > 80) 
// { console.log('excelent')
// } 

// else if (nilai => 60)
// {console.log('good job')
// } 

// else if(nilai < 60)
// {console.log('dont give up')
// }
// else 
// {console.log('please input valid number')}


// Create your BMI Calculator using if else statement, under the conditions:
// if BMI < 18.5, print 'Berat badan Anda kurang'
// if BMI in the range of 18.5 until 24.9, print 'Berat badan Anda ideal'
// if BMI in the range of 25.0 until 29.9, print 'Berat badan Anda berlebih'
// if BMI in the range of 30.0 until 39.9, print 'Berat badan Anda sangat berlebih'
// if BMI > 39.9, print 'Anda obesitas'


// Hint: BMI is measure by dividing  body weight (in kg) with body height (in meter) square 

let tinggiBadan = 170
let beratBadan = 65

let tinggiBadan2 = (tinggiBadan/100)
let tinggibadan3 = (tinggiBadan2*2)


let bmi = (beratBadan/tinggibadan3)



if (bmi < 18.5)
{console.log ('Berat badan Anda kurang')
}
else if (bmi < 24.90)
{console.log ('Berat badan Anda ideal')
}
else if (bmi < 29.90)
{console.log ('Berat badan Anda berlebih')
}
else if (bmi < 39.90)
    {console.log('Berat badan Anda sangat berlebih')
}
else if (bmi < 39.90)
    {console.log ('Anda Obesitas')
}

