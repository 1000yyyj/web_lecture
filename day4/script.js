// const name = "yeji";
// const age = 17;
// console.log(typeof name);

// console.log(typeof age);

// const arr = [1, 2, 3]; // type??? -> object

// console.log(typeof arr);

// const tmp = null; // type -> object

// console.log(tmp);

// null -> 0 취급
// undefined -> NaN 취급

// let tmp;
// console.log(tmp + 123);

// let tmp = 11 + "yeji"; // "11yeji"
// console.log(String(tmp));

// console.log(Boolean(!!"yeji")); // true
// console.log(Boolean(!!"")); // false

// console.log(isNaN(11)); // isNaN -> false : 숫자라는 뜻!
// console.log(isNaN(11 + "yeji")); // isNaN -> true

// console.log(Number.isNaN(11)); // isNaN -> false : 숫자라는 뜻!
// console.log(Number.isNaN(11 + "yeji")); // isNaN -> true

// function example() {
//   return condition1
//     ? value1
//     : condition2
//     ? value2
//     : condition3
//     ? value3
//     : value4;
// }

// const condition = checkCondition(c);

// function example2() {
//   if (condition1) {
//     return value1;
//   } else if (condition2) {
//     return value2;
//   } else if (condition3) {
//     return value3;
//   } else {
//     return value4;
//   }
// }

// // 조건식 ? 참일때의 값 : 거짓일때의 값
// const ex3 = condition1 ? (a === 0 ? "zero" : "positive") : "negative";

// function greeting(isLogin) {
//   const name = isLogin ? getName() : "이름없음";

//   return `안녕하세요 ${name}`;
// }

// function greeting2(isLogin) {
//    if(isLogin){
//     return `안녕하세요 ${getName()}`
//    }

//     return `안녕하세요 이름없음`;

//   }

if ("string".length > 0) {
  console.log("빈 문자열이 아님");
}

if (!isNaN(10)) {
  console.log("숫자가 맞음");
}

const bool = true;
if (bool === true) {
  console.log("참");
}

if ("string".length) {
  console.log("빈 문자열이 아님");
}

if (10) {
  console.log("숫자가 맞음");
}

const bool2 = true;
if (bool2) {
  console.log("참");
}

function printName(name) {
  if (!name) {
    console.log("아무도 없네요");
  } else {
    console.log(`반갑습니다 ${name}님!`);
  }
}

console.log(true && false && "과연?");

console.log(true || false || "이번에는?");

function callAPI() {
  // ...........

  const data = "_____";

  //   if (data) {
  //     return data;
  //   } else {
  //     return "fetching...";
  //   }

  //   return data ? data : "fetching....";
  return data || "fetching....";
}

// 유저가 로그인을 했고! 유저가 이름이 유의미하다면! 이름을 표시 아니면 '이름없음'
const customer = {
  name: "yeji",
  age: 20,
};
const isLogined = true;

function getActiveUserName(isLogin, user) {
  let user_name;
  let user_age;

  if (isLogin) {
    if (user) {
      if (user.name) {
        user_name = user.name;
        user_age = user.age;
      } else {
        user_name = "이름없음";
      }
    }
  }

  return { user_name, user_age };
}

console.log(getActiveUserName(isLogined, customer));

function getUserName() {
  if (isLogin && user) {
    return user.name || "이름없음";
  }
}

if (!Number.isNaN(3)) {
  console.log("숫자입니다~!");
}

const arr = [1, 2, 3];

const objArr = { 0: 1, 1: 2, 2: 3, length: 3 };

console.log(Array.isArray(arr));
console.log(Array.isArray(objArr));

console.log(arr.length);

arr.length = 0; // []
console.log(arr.length);
console.log(arr);

// const confirmBtn = document.getElementsByTagName("button")[0];
// const cancelBtn = document.getElementsByTagName("button")[1];
// const resetBtn = document.getElementsByTagName("button")[2];

const [confirmBtn, cancelBtn, resetBtn] =
  document.getElementsByTagName("button");

const originArray = ["123", "456", "789"];

const newArray = originArray;

originArray.push(10);
originArray.push(20);
originArray.push(30);

console.log(originArray);
console.log(newArray);

// 유사 배열 객체

const arr1 = ["hello", "javascript"];
console.log(arr1);

const objLikeArr = { 1: "hello", 0: "javascript", length: 5 };
const converted = Array.from(objLikeArr);
console.log(objLikeArr);
console.log(converted);

// 함수

// 함수 선언식
function sum1(a, b) {
  return a + b;
}

// function 함수이름 ( 매개변수, ...) {
//     수행할 코드
// }

// 함수 표현식
const sum2 = function (a, b) {
  return a + b;
};

const person = {
  eyes: 2,
  // speak: function () {
  //   console.log("말말");
  // },
  speak: () => console.log("말말"),
};

// 화살표 함수
const sum3 = (a, b) => a + b;

console.log(sum3(1, 2));

// (매개변수) => { // 실행할 문장... }

// 화살표 함수 어디에 많이 쓰나!
// 함수 내에 콜백함수로 건네줄 때 많이 사용
const array1 = ["a", "b", "c"];

// for (let index = 0; index < array1.length; index++) {
//   const element = array1[index];
//   console.log(element);
// }

array1.forEach((arrItem) => console.log(arrItem));

// arrow function의 단점
console.log(this);

const student = {
  age: 17,
  sayAge: () => {
    console.log(this); // 자기 자신 참조 불가!
    console.log(this.age);
  },
};

student.sayAge();

// ["학생 a", "학생 b", "학생 c"] -> map() vs forEach()

const students = array1.map((name) => "학생 " + name);
console.log(students);

function temp() {
  return 1 + 2;
}

console.log(temp(1, 2, 3, 4, 5));

/* Quiz. 다음 조건을 만족하는 함수를 작성하라.
 <조건>
1. “원” 글자를 붙여 원화 표기 
2. 1000원 초과 값만 출력 // Array.filter()
3. 조건에 맞는 값만 갖고 있는 배열 반환 // 조건1, 3 -> Array.map() 
4. 오름차순으로 정렬
*/

const price = ["2000", "1000", "3000", "5000", "4000"];
function getWonPrice(pricelist) {
  // const temp = [];
  // for (let i = 0; i < pricelist.length; i++) {
  //   if (Number(pricelist[i]) > 1000) {
  //     temp.push(pricelist[i] + "원");
  //   }
  // }
  // return temp;
  //const isOverThousand = pricelist.filter((item) => Number(item) > 1000);
  //const sortedList = isOverThousand.sort((a, b) => a - b);
  //return sortedList.map((item) => item + "원");

  return pricelist
    .filter((item) => Number(item) > 1000)
    .sort((a, b) => a - b)
    .map((item) => item + "원");
}

const result = getWonPrice(price);
console.log(result);
