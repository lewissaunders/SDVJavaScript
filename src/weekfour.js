let country = "New Zealand"
let city = "Nelson"
let postalCode = 7010

console.log(typeof country);
console.log(typeof city);
console.log(typeof postalCode);

// declared Variable, named variable, assigned string value to city
//*line 2 - Let is the declared variable - City is the Variable name - Nelson is the Assigned string value

let isIsland = true
let language
//if something hasnt been given a value - look for a comment - or if you plan on doing it - make sure you leave a comment

console.log(typeof isIsland)
console.log(typeof language)

language = "arabic"
console.log(language)

let number = 10
console.log(number)

console.log(number /2)
console.log(number >6)
console.log(number <2)

const address = country + " " + city + " " + postalCode
console.log(address)

let string = `My address is ${country}, ${city}, and ${postalCode}`

console.log(string)

let x ='Ali';

if(x === 'Ali' && typeof 'string') {
    console.log('its true')
 } 
 else {
    console.log('its false')
}

//Double bars "||" = or and double & symbol "&&" = and

x = '1234567'
console.log(typeof x)
let y = Number (x)
// Console.log()
console.log(typeof y)
const a = 1+1
console.log(1+1)
const b = (a + 2)
console.log(b)
const information = {
    student : 'Lewis',
    country : 'New Zealand',
    city : 'Nelson',
    postCode : 7010
}

let info = {
    name : 'Lewis',
    gender : 'Male',
    height : '183cm',
    weight : '111.11',
    age : '26'
}

let c = 12

if(c === 12 || typeof c ==='string') {
console.log('its true')
}
else {
    console.log('error')
}

let t =5 // declaring a = 5
let s = t // declaring b = 5
console.log(t) // true
console.log(s) // true
console.log(t===s) // true
t = 10 // declaring T =10 now
console.log(t) // value =10 now
console.log(s) // value =5 still
console.log(t===s) // stated as false because t no longer is declared as 5, therefore t no longer = S