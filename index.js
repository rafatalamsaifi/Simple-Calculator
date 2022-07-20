let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((buttons) => {
  buttons.addEventListener("click", (event) => {
    if (event.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (event.target.innerHTML == "AC") {
      string = "";
      document.querySelector("input").value = string;
    } else if (event.target.innerHTML == "%") {
      srting = eval(string);
      string = eval(string * 100);
      document.querySelector("input").value = string;
    } else {
      console.log(event.target);
      string = string + event.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});
