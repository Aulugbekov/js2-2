console.log("Client request");

// setTimeout(() => {
//   console.log("Json Data is ready");
//   const JsonData = JSON.stringify(person);
//   console.log(person, JsonData);

//   setTimeout(() => {
//     const parsedData = JSON.parse(JsonData);
//     console.log("Parsed data is ready", parsedData);
//     console.log("loading end");
//   }, 2000);
// }, 1000);

// const JsonData = JSON.stringify(person);
// const parsedData = JSON.parse(JsonData);

// const JsonData = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const JsonData = JSON.stringify(person);
//     console.log("JSON format ", JsonData);
//     console.log("is preparing");
//     resolve();
//   }, 2000);
// });

// promise.then(() => {
//   setTimeout(() => {
//     const JsonData = JSON.parse(person);
//     console.log("Parsed data is ready", JsonData);
//     console.log("loading end");
//   }, 1000);
// });

// const JsonData = JSON.stringify(person);
// const parsedData = JSON.parse(JsonData);
// Создаётся объект promise
let promise = new Promise((resolve, reject) => {
  const person = {
    name: "USER1",
    number: "1235413637",
    age: "23",
    status: "online",
    sallary: "3000$",
    plaseOfBirth: "Kyrgyzstan",
  };
  setTimeout(() => {
    console.log("Json Data is ready...");
    const jsonData = JSON.stringify(person);
    console.log(person, jsonData);
    resolve(jsonData);
  }, 2000);
});

// promise.then навешивает обработчики на успешный результат или ошибку
// promise.then((jsonData) => {}
//   setTimeout(() => {
promise
  .then((jsonData) => {
    setTimeout(() => {
      console.log("Parsed data is ready...");
      const JsonParsed = JSON.parse(jsonData);
      console.log(JsonParsed);
      console.log("loading end");
    }, 3000);
  })
  .catch(() => {
    console.log("error");
  });
