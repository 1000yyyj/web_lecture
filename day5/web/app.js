// // HTML문서에 직접 접근할 수 있게!

// const submitBtn = document.getElementById("submit-btn");
// console.log(submitBtn);

// const hiddenBtn = document.getElementsByClassName("hidden");

// const [divA, divB, divC] = document.getElementsByTagName("div");
// console.log(divA);

// const radioInputs = document.getElementsByName("animal");
// console.log(radioInputs);

// const firstDiv = document.querySelector("div");
// console.log(firstDiv);

// // if (div1.classList.contains("color-red")){
// //     div1.classList.remove("color-red");
// // } else {
// //     div1.classList.add("color-red");
// // }

// const newDiv = document.createElement("div");
// newDiv.innerText = "추가된 영역!";
// newDiv.className = "color-red";

// const form = document.querySelector("form");
// form.appendChild(newDiv);

// const [div1, div2, div3] = document.querySelectorAll("div");

// // div1.innerText = "영역 1";
// // div1.classList.toggle("color-red");

// // 브라우저 -> 유저가 클릭, 마우스를 올려볼 수 있고
// // Event!

// // 키보드 -> 뭔가 입력했을 때
// // 마우스 -> 클릭 "click" / 마우스를 올렸을 때
// // form -> 제출됬을 때 "submit"

// const clickHandler = () => console.log("클릭됨!");
// div1.addEventListener("click", clickHandler);
// // div1.removeEventListener("click", clickHandler);

const loginForm = document.querySelector(".login-form form");
const loginInput = document.querySelector(".login-form input");
const greetingH1 = document.querySelector("#greeting");

const loginSubmitHandler = (event) => {
  event.preventDefault();
  const username = loginInput.value;
  if (username === "") {
    alert("값을 입력해주세요");
  } else if (username.length > 15) {
    alert("15자 이내로 작성해주세요");
  } else {
    greetingH1.innerText = `${username}님, 환영합니다!`;
    loginForm.classList.add("hidden");
    greetingH1.classList.remove("hidden");
  }
  console.log();
};

loginForm.addEventListener("submit", loginSubmitHandler);
