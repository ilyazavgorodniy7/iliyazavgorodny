window.addEventListener("DOMContentLoaded", function () {
    const a = document.getElementById("btn-count");
    a.addEventListener("click", countPrice);
});
function countPrice(event) {
    event.preventDefault();
    const count = document.getElementById("count");
    const price = document.getElementById("price");
    const total = document.getElementById("total");
    let result = count.value * price.value;
    if (!Number.isNaN(result)&&count.value>0&&price.value>0) {
        total.value = result;
    } else {
        alert("Допущена ошибка при вводе данных!");
    }
}
