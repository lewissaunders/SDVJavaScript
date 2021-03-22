const grade = 80;
switch (grade) {
    case 60:
        console.log('60%');
        break;
    case 70:
        console.log('70%');
        break;
    case 80:
        console.log('80%');
        break;
    case 90:
        console.log('90%');
        break;
    default:
        console.log('Fail');
        break;
}


const doo = 1;
switch (doo) {
  case 1:
  case 2:
  case 3:
  case 4:
    console.log('I like this number');
    break;
  case -1:
  case -2:
    console.log('I love this number');
    break;
  default:
    console.log('I don\'t like this number.');
}

const foo = 1;
let output = '';
switch (foo) {
  case 0:
    output += 'So ';
  case 1:
    output += 'How ';
    output += 'Old ';
  case 2:
    output += 'Are ';
  case 3:
    output += 'You';
  case 4:
    output += '?';
    console.log(output);
    break;
  case 5:
    output += '!';
    console.log(output);
    break;
  default:
    console.log('Please pick a number from 0 to 5!');
}
let person = {
    name: 'tony',
    age: 17,
    driver: null
  }
  if (person.age >=16) {
      person.driver = 'Yes'
  } else {
      person.driver = 'No'
  }

  console.log(person.driver);
  
  person.driver = person.age >=16 ? 'Yes' : 'No'

  let isStudent = true;
  let price = isStudent ? 8 : 12
  console.log(price);
// 8