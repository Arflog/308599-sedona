var btn = document.querySelector(".link-search");
var form = document.querySelector(".search-form");
  btn.addEventListener("click", function(event) {
  event.preventDefault();
  if(form.classList.contains("form-open")){
    form.classList.remove("form-open");
    }
    else {
      form.classList.add("form-open");
      }
  });