const takeOrder = (customerAction) => {
  console.log("Waiter takes the customer's order");

  customerAction();
};

takeOrder(() => {
  console.log("Kitchen prepares the food");
});