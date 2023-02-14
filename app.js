const span_value = document.querySelector("#set_number");
const priview_btn = document.querySelector("#priview_btn");
const next_btn = document.querySelector("#next_btn");
let count = 0;
next_btn.addEventListener("click", () => {
  count++;
  span_value.innerHTML = count;
  if (count > 0) {
    span_value.style.color = "green";
  }
});
priview_btn.addEventListener("click", () => {
  count--;
  span_value.innerHTML = count;
  if (count < 0) {
    span_value.style.color = "red";
  }
});
