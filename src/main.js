import "./style.css";

function submitData() {
  const product = document.getElementById("product").value;
  const quantity = document.getElementById("quantity").value;
  const resultDiv = document.getElementById("result");

  if (product === "" || quantity === "") {
    alert("Please select product and quantity");
    return;
  }

  resultDiv.classList.remove("hidden");
  resultDiv.innerHTML = `
    <strong>Selected Product:</strong> ${product}<br>
    <strong>Quantity:</strong> ${quantity}
  `;
}

document.getElementById("submit-order").addEventListener("click", submitData);
