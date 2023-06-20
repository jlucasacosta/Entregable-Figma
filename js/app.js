const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

let user;

const showData = () => {
  const inputFirstName = document.querySelector("#firstName").value;
  const inputLastName = document.querySelector("#lastName").value;
  const inputEmail = document.querySelector("#email").value;
  const inputCompanyName = document.querySelector("#companyName").value;
  const inputPhoneNumber = document.querySelector("#phoneNumber").value;
  const inputMessage = document.querySelector("#message").value;

  const input = document.querySelectorAll("input");

  const validInput = input.forEach((element) => {
    if (element.value === "") {
      element.classList.add("invalid__input");
    } else {
      element.classList.remove("invalid__input");
    }
  });

   user = {
    name: inputFirstName,
    lastName: inputLastName,
    email: inputEmail,
    companyName: inputCompanyName,
    phone: inputPhoneNumber,
    message: inputMessage,
  };

  if (
    inputFirstName !== "" &&
    inputLastName !== "" &&
    inputEmail !== "" &&
    inputCompanyName !== "" &&
    inputPhoneNumber !== ""
  ) {
    console.log(user);
    showModal();
  } else {
    validInput;
  }
};

const showModal = () => {
  const modal = document.querySelector(".modal__container");
  modal.style.display = "flex";

  const name = document.querySelector("#modal__name");
  name.textContent = `Name: ${user.name}`;
  const lastname = document.querySelector("#modal__lastname");
  lastname.textContent = `Last Name: ${user.lastName}`;
  const email = document.querySelector("#modal__email");
  email.textContent = `Email: ${user.email}`;
  const companyName = document.querySelector("#modal__company");
  companyName.textContent = `Company: ${user.companyName}`;
  const phone = document.querySelector("#modal__phone");
  phone.textContent = `Phone Number: ${user.phone}`;
  const message = document.querySelector("#modal__message");
  message.textContent = user.message
    ? `Message: ${user.message}`
    : "You forgot to write a message :(";

  const closeModal = () => {
    modal.style.display = "none";
  };

  const closeModalBtn = document
    .querySelector(".modal__close__btn")
    .addEventListener("click", () => {
      closeModal();
      form.reset();
    });
};

const submitBtn = document
  .querySelector("#btn__submit")
  .addEventListener("click", showData);
