let c = 0; // Initialize the counter
const inputs = document.getElementById("inp");

function Add() {
  // Assuming you have an input field with this ID
  const text = document.querySelector(".text"); // Assuming you have a container with this ID

  if (inputs.value == "") {
    alert("Write the message");
  } else {
    let newEle = document.createElement("ul");
    newEle.innerHTML = `${inputs.value}`;

    if (c % 2 == 0) {
      newEle.classList.add("text1");
    } else {
      newEle.classList.add("text2");
    }

    text.appendChild(newEle);
    inputs.value = "";
    c += 1;
  }
}
inputs.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    Add();
  }
});
// let inputs = document.getElementById("inp");
// let text = document.querySelector(".text");

// let c = 0;
// function Add() {
//   if (inputs.value == "") {
//     alert("Write the message");
//   } else {
//       let newEle = document.createElement("ul");
//       newEle.innerHTML = `${inputs.value}`;
//       text.appendChild(newEle);
//       inputs.value = "";
//   }
// }
