document.querySelector("form").addEventListener("submit", e => {
  let submitForm = true;
  let name = document.querySelector("#name");
  let color = document.querySelector("#color");
  let blogUrl = document.querySelector("#blogUrl");
  let age = document.querySelector("#age");
  let tel = document.querySelector("#tel");
  let password = document.querySelector("#password");
  let nic = document.querySelector("#nic");
  let format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  if (format.test(name.value) || /[0-9]/.test(name.value)) {
    submitForm = false;
    document.querySelector("#nameHelp").innerHTML = "Please enter only small or capital letters and spaces";
    name.classList.add("is-invalid");
  } else {
    document.querySelector("#nameHelp").innerHTML = "";
    name.classList.remove("is-invalid");
  }

  if (tel.value.length != 12) {
    submitForm = false;
    document.querySelector("#telHelp").innerHTML = "Please use 12-digit format i.e 92xxxxxxxxxx";
    tel.classList.add("is-invalid");
  } else {
    document.querySelector("#telHelp").innerHTML = "";
    tel.classList.remove("is-invalid");
  }

  if (
    password.value.replace(/[^A-Z]/g, "").length < 1 ||
    password.value.replace(/[^a-z]/g, "").length < 2 ||
    password.value.replace(/[^0-9]/g, "").length < 2 ||
    password.value.replace(/[^`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g, "").length < 2
  ) {
    submitForm = false;
    document.querySelector("#passwordHelp").innerHTML = "Password must contain 2 small, 1 upper case, 2 digit and 2 special characters";
    password.classList.add("is-invalid");
  } else {
    document.querySelector("#passwordHelp").innerHTML = "";
    password.classList.remove("is-invalid");
  }

  if (
    /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test((nic.value.slice(0, 5) + nic.value.slice(6, 13) + nic.value.slice(14, 15))) ||
    /[A-Z]/.test(nic.value) || /[a-z]/.test(nic.value) ||
    nic.value.length != 15 ||
    nic.value.charAt(5) != "-" ||
    nic.value.charAt(13) != "-"
  ) {
    submitForm = false;
    document.querySelector("#nicHelp").innerHTML = "Format must be valid i.e. xxxxx-xxxxxxx-x i.e. 13 digits with dash at right place.";
    nic.classList.add("is-invalid");
  } else {
    document.querySelector("#nicHelp").innerHTML = "";
    nic.classList.remove("is-invalid");
  }

  if (!submitForm) {
    e.preventDefault();
  } else {
    console.log("Input Data is Valid!");
  }
});
