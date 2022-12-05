window.addEventListener("DOMContentLoaded", function () {
    const type = document.getElementById("type");
    const num = document.getElementById("num");
    const radios = document.getElementById("radios");
    const checkbox = document.getElementById("checkbox");
    radios.style.display = "none";
    checkbox.style.display = "none";
    num.addEventListener("input", function () {
      if (Number.isNaN(Number(num.value))) {
        alert("Данные введены неверно");
        num.value = "";
        return;
      }
      let p = type.value;
      switch (p) {
        case "first":
          countPrice(1);
          break;
        case "second":
          countPrice(2);
          break;
        case "thirth":
          countPrice(3);
          break;
      }
    });
    type.addEventListener("change", function () {
      switch (type.value) {
        case "first":
          radios.style.display = "none";
          checkbox.style.display = "none";
          countPrice(1);
          break;
        case "second":
          radios.style.display = "block";
          checkbox.style.display = "none";
          countPrice(2);
          break;
        case "thirth":
          radios.style.display = "none";
          checkbox.style.display = "block";
          countPrice(3);
          break;
      }
    });
  });
  
  function countPrice(option) {
    const count = Number(document.getElementById("num").value);
    const babies_toys = 20;
    const childrens_toys = 30;
    const olds_toys = 100;
    const total = document.getElementById("total");
    let rad = document.querySelectorAll("#radios input[type=radio]");
    let check = document.getElementById("checkbox-check");
    let result_1 = babies_toys * count;
    let result_2 = childrens_toys * count;
    let result_3 = olds_toys * count;
    switch (option) {
      case 1:
        total.value = result_1;
        break;
      case 2:
        rad.forEach(function (i) {
          i.addEventListener("change", function () {
            result_2 = childrens_toys * count + Number(i.value);
            total.value = result_2;
          });
          total.value = result_2;
        });
        break;
      case 3:
        check.addEventListener("change", function () {
          if (check.checked) {
            result_3 = olds_toys * count + Number(check.value);
            total.value = result_3;
          } else {
            result_3 = olds_toys * count;
            total.value = result_3;
          }
        });
        total.value = result_3;
        break;
    }
  }