// 1
for (let i = 1; i <= 5; i++){
  console.log(i);
}

// 2-3
const cookies = ['kangkong','oregano','anahaw'];
let i = 0
for (i=0; i<cookies.length; i++){
  console.log('may nakagawa na kaya ng ' + cookies[i] + ' cookies?');
}

// 4-5
let jarNotEmpty = true;

while (jarNotEmpty) {
  if (cookies.length > 0) {
    const eatenCookie = cookies.pop(); // stack opearation
    console.log('mmmMmm sarap ng '+ eatenCookie + ' cookie');
  } else {
    console.log('obos na');
    jarNotEmpty = false;
  }
}

