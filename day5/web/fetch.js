// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((res) => res.json())
//   .then((data) => {
//     // data를 응답받은 후의 로직~
//   })
//   .then(() => {})
//   .then(() => {})
//   .catch((error) => alert(error.message));

// new Promise((resolve, reject) => {
//   throw new Error("에러 발생");
// })
//   .catch((err) => alert("에러 잘 처리했습니다. 정상적으로 다시 실행합니다."))
//   .then(() => alert("다음 핸들러로 넘어왔습니다."));

// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     throw new Error("에러 발생!");
//   }, 1000);
// }).catch(alert);
/*
fetch("http://localhost:3000/userInfo")
  .then((res) => {
    res.json();
  })
  .then((data) => console.log(data))
  .catch((err) => alert(err));
*/
