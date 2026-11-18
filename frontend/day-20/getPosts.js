// async function getPosts() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   console.log(response);
//   const data = await response.json();
//   console.log(data.slice(0, 10));
// }

// getPosts();

// console.log("hi");

// fetch() returns promise

const payment = new Promise((res, rej) => {
  console.log("Payment Verifying"); // 1
  let paymentSuccess = true;

  setTimeout(() => {
    if (paymentSuccess) {
      res("Payment Successfull"); // 2
    } else {
      rej("Payment failed");
    }
  }, 2000);
});


//---------- old way -------------
// payment
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error))
//   .finally(() => {
//     console.log("Code Completed"); // 3
//   });


//------------- new way -------------
// async function myFunc() {
//   try {
//     const result = await payment;
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("Code completed");
//   }
// }

// myFunc();
