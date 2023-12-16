// 1-2
let temperature = 21;

if (temperature > 30){
  console.log('temp is greater than 30');
} else {
  console.log('not greater than 30');
}

// 2-5
let time = 18;

if (time >= 0 && time <= 11){
  console.log('morning');
} else if (time >= 12 && time <= 17){
  console.log('afternoon');
} else if (time >= 18 && time <= 24){
  console.log('evening');
} else {
  console.log('invalid time');
}

// 6
let day = 9;
switch (day){
  case 1: console.log('sunday'); break;
  case 2: console.log('monday'); break;
  case 3: console.log('tuesday'); break;
  case 4: console.log('wednesday'); break;
  case 5: console.log('thursday'); break;
  case 6: console.log('friday'); break;
  case 7: console.log('saturday'); break;
  default: console.log('not valid');
}