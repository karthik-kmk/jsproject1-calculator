var string = "";
var number = document.querySelectorAll("#bt");
var div = document.querySelector("#div");
var clear = document.querySelector("#btn-clear");
var equals = document.querySelector("#btn-equals");


number.forEach(function (number) {
  number.addEventListener("click", function () {
    string += number.innerHTML;
    console.log(number.innerHTML);
    div.innerHTML = number.innerHTML
    equals.addEventListener("click", function () {
      let result = eval(string);
      console.log(result);
      div.innerHTML = result;
    });
  });
});

clear.addEventListener("click", function () {
  div.innerHTML = "";
  string = "";
});
