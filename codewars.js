// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!Digital root is the recursive sum of all the digits in a number.
// 1 way
// function digital_root(n) {
// // ...
// let newN = n;
// let sum = 0;
// const summaring = n => {
//     for (digit of String(n)) {
//         sum += +digit;
//     }
//     console.log(sum);
//     return sum;
// }

// while (String(newN).length > 1) {
//     console.log(String(newN).length);
//     summaring(newN);
//     newN = sum;
//     sum = 0;
// }
// 2 way
// ...
//     let newN = n;
//     let sum = 0;
//     while (String(newN).length > 1) {
//         for (digit of String(newN)) {
//             sum += +digit;
//         }
//         newN = sum;
//         sum = 0;
//     }
//     return newN;
// }
// console.log(digital_root(16)); //Test.assertEquals( digital_root(16), 7 )
// console.log(digital_root(456)); //Test.assertEquals( digital_root(456), 6 )

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!Return the number (count) of vowels in the given string.
// function getCount(str) {
//     var vowelsCount = 0;
//     for (sym of str) {
//         if (sym === 'a' || sym === 'e' || sym === 'i' || sym === 'o' || sym === 'u') { vowelsCount += 1; }
//     }
//     return vowelsCount;
// }
// getCount("abracadabra");

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Your job is to figure out the index of which vowel is missing from a given string:
// function absentVowel(x) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     for (const char of vowels) {
//         if (x.indexOf(char) == -1) {
//             console.log(char);
//             console.log(vowels.indexOf(char));
//             return (vowels.indexOf(char));
//         }
//     }
// }
// absentVowel("John Doe hs seven red pples under his bsket");
// absentVowel("Bb Smith sent us six neatly arranged range bicycles");


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Get the Middle Character
// function getMiddle(s) {
//     return s.length % 2 === 0 ? (s[s.length / 2 - 1] + s[s.length / 2]) : (s[Math.floor(s.length / 2)]);
// }
// console.log(getMiddle("test")); //,"es");
// console.log(getMiddle("testing")); //,"t");
// console.log(getMiddle("middle")); //,"dd");
// console.log(getMiddle("A")); //,"A");

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Highest and Lowest
// const highAndLow = numbers => {
//     let minNumber = numbers.split(' ')[0];
//     let maxNumber = numbers.split(' ')[0];
//     for (const number of numbers.split(' ')) {
//         if (+number > maxNumber) maxNumber = +number;
//         if (+number < minNumber) minNumber = +number;
//     }
//     console.log(`maxNumber: ${maxNumber} minNumber: ${minNumber}`);
//     console.log(`${maxNumber} ${minNumber}`);
//     return(`${maxNumber} ${minNumber}`);
// }

// highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")// "42 -9");
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5");
// highAndLow("3989 4658 4487 4680 3863 4146 3296 5708 3837 5503 3408 6012 3238 3892 4063 5995 5154 4818 4073 6303 3573");

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Jaden Casing Strings
// const upperChar = string => {
//     const newString = [];
//     for (const word of (string.toLowerCase().replace(/\s/g, ' ')).split(' ')) {
//         [word[0],...wordChar]=word;
//         if (word.length!==0 && (word[0] !== '' || word[0] !== ' ')) {
//             newString.push([word[0].toUpperCase(),...wordChar].join(''));
//         }
//     }
//     console.log(newString.join(' '));
//     return (newString.join(' '));
// }
// upperChar('hello,  world!');
// upperChar(' many Different Words Inside Sentence');
// upperChar('   hello,   world!');
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Head, Tail, Init and Last
// const head = array => {
//     [first, ...rest] = array;
//     return (first);
// }
// const tail = array => {
//     [first, ...rest] = array;
//     return(rest);
// }
// const init = array => {
//     const newArray = []
//     array.map((item, index) => {
//         if (index < array.length - 1) {
//             newArray.push(item);
//         }
//     })
//     return(newArray);
// }
// const last = array => {
//     return array[array.length-1];
// }
// вариант решения
// function head(array) {
//     return array[0];
//   }
//   function tail(array) {
//     return array.slice(1);
//   }
//   function init(array) {
//     return array.slice(0, -1);
//   }
//   function last(array) {
//     return array[array.length-1];
//   }

// console.log(head([5, 1]));//, 5 );
// console.log(tail([1]));//, [] );
// console.log(init([1, 5, 7, 9]));//, [1,5,7] );
// console.log(last([7, 2]));//, 2 )

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Multiples of 3 or 5
// const solution = number => {
//     let num = 0;
//     for (let i = 1; i < number; i += 1) {
//         (i % 3 === 0 || i % 5 === 0) ? num += i : num;
//     }
//     return num;
// }
// console.log(solution(10));

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Reverse or rotate?
// const revrot = (str, sz) => {
//     let index = 0;
//     let start = 0;
//     let partString = [];
//     let lastString = str;
//     let newString = '';
//     let sum = 0;
//     if (sz <= 0 || str.length === 0 || sz > str.length) return '';
//     while (lastString.length >= sz) {
//         partString[index] = str.slice(start, start + sz);
//         lastString = str.slice(start + sz);
//         index += 1;
//         start += sz;
//     }
//     for (subString of partString) {
//         // console.log(subString.split(''));
//         (subString.split('')).forEach(item => {
//             // console.log(item);
//             // console.log(sum);
//             return sum += ((+item) ** 3);
//         })
//         if (sum % 2 === 0) {
//             // console.log('even');
//             newString = newString + (((subString.split('')).reverse()).join(''));
//             // console.log(newStrung);
//         } else {
//             // console.log('odd');
//             // console.log((subString.split('')).slice(1));
//             // console.log((subString.split('')).slice(0,1));
//             newString = newString + (((subString.split('')).slice(1).concat((subString.split('')).slice(0, 1))).join(''));
//             // console.log((subString.split('')).slice(1).concat((subString.split('')).slice(0,1)));
//             // console.log(newStrung);
//         }
//         sum = 0;
//     }
//     // console.log(newString);
//     return (newString);
// }

// console.log(revrot("1234", 0)); // "");
// console.log(revrot("", 0)); // "");
// console.log(revrot("1234", 5)); //, "")s = "733049910872815764"
// console.log(revrot("733049910872815764", 5)); //, "33047 91089 28157")
// console.log(revrot("563000655734469485", 4));// --> "0365 0650 7345 6944"
// console.log(revrot("123456987654", 6)); // --> "234561876549"
// console.log(revrot("123456987653", 6)); // --> "234561356789"
// console.log(revrot("66443875", 4)); // --> "44668753"
// console.log(revrot("66443875", 8)); // --> "64438756"
// console.log(revrot("664438769", 8)); // --> "67834466"
// console.log(revrot("123456779", 8)); // --> "23456771"


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Digits explosion
// function explode(s) {
//     if (s.length === 0) return '';
//     let newString = '';
//     for (const item of s.split('')) {
//         if (item === 0) continue;
//         for (let i = 0; i < item; i += 1) {
//             // console.log(item)
//             newString = newString + item;
//         }
//     }
//     return newString;
// }
// console.log(explode('312'));//"333122"
// console.log(explode('102269'));//"12222666666999999999"
// console.log(explode('123'));//"122333"
// console.log(explode('0'));//""
// // вариант решения
// function explode(s) {
//     return s.toString().split('').map(function(el) {
//       return el = el.repeat(el);
//     }).join('');
//   }


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Vasya - Clerk
function tickets(peopleInLine) {
    const stack = [];
    for (let item of peopleInLine) {
        if (stack.length === 0) {
            stack.push(item);
            continue;
        }
        let index25 = 0;
        let index50 = 0;
        switch (item) {
            case 50:
                index25 = stack.indexOf(25);
                if (index25 === -1) return 'NO';
                stack.splice(index25, 1);
                break;
            case 100:
                index50 = stack.indexOf(50);
                if (index50 === -1) {
                    index25 = stack.indexOf(25);
                    if (index25 === -1) return 'NO';
                    stack.splice(index25, 1);
                    index25 = stack.indexOf(25);
                    if (index25 === -1) return 'NO';
                    stack.splice(index25, 1);
                    index25 = stack.indexOf(25);
                    if (index25 === -1) return 'NO';
                    stack.splice(index25, 1);
                    break;
                }
                stack.splice(index50, 1);
                index25 = stack.indexOf(25);
                if (index25 === -1) return 'NO';
                stack.splice(index25, 1);
                break;
        }
        stack.push(item);
    }
    return 'YES';
}

console.log(tickets([25, 50, 25, 100, 25, 25, 25, 100, 25, 50, 25, 100, 25, 50, 25, 100])); // => YES 
console.log(tickets([25, 25, 50])); // => YES 
console.log(tickets([25, 100])); // => NO. Vasya will not have enough money to give change to 100 dollars
console.log(tickets([25, 25, 50, 50, 100])); // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)
console.log(tickets([25, 25, 25, 25, 50, 100, 50])); // => yes. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)
console.log(tickets([25, 25, 50, 100, 25, 25, 50, 100, 25, 25, 50, 100, 25, 50, 25, 100, 25, 25, 25, 100])); // => yes. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)