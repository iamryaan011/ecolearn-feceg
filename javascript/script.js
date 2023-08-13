//validate email
const validateEmail = (email) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};

//validate form
const btn = document.querySelector("#submit");

btn.addEventListener("click", function (e) {
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  //verify email
  if (name.length > 0 && message.length > 0 && validateEmail(email)) {
    window.location.href = "/pages/index.html";
  } else {
    alert("Há campos vazios ou inválidos");

    e.preventDefault();
  }
});

//sky
const btn_2 = document.querySelector("#button");

btn_2.addEventListener('click', function (e) {
  console.log('enviado!')
}) 