function selectBox(unit, price) {
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(box => box.classList.remove("active"));

    let selectedBox = boxes[unit - 1];
    selectedBox.classList.add("active");

    let radioButtons = document.querySelectorAll(".box input[type='radio']");
    radioButtons[unit - 1].checked = true;

    document.getElementById('total-price').innerText = `$${price}.00 USD`;
}
