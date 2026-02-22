const payBtn = document.getElementById("payButton");
const message = document.getElementById("message");

payBtn.addEventListener("click", function() {

  message.textContent = "Paying";

  const paymentPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Payment donee");
    }, 2000);
  });

  paymentPromise.then(result => {
    message.textContent = result;
    payBtn.disabled = true;
  });

});