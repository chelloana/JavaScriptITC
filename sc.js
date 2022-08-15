const form = document.querySelector("form");
const input = document.getElementById("inputList");
const list = document.querySelector(".list-group");

form.addEventListener("submit", function (event) {

  list.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckboxStretched">
      <h3>${input.value}</h3> <span class="fs-3"><i class="btn-close" id="delete-btn"></i></span>
    </li>
  `

  input.value = "";

  event.preventDefault();
});

list.addEventListener("click", function (event) {
  if (event.target.id == "delete-btn") {
    event.target.parentElement.parentElement.remove();
  }

});