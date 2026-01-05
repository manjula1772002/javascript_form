  function submitData() {
    const product = document.getElementById("product").value;
    const quantity = document.getElementById("quantity").value;
    const resultDiv = document.getElementById("result");

    if (product === "" || quantity === "") {
      alert("Please select product and quantity");
      return;
    }

    resultDiv.style.display = "block";
    resultDiv.innerHTML = `
      <strong>Selected Product:</strong> ${product}<br>
      <strong>Quantity:</strong> ${quantity}
    `;

  }

  const resultEl = document.querySelector("div")

  console.log(resultEl.innerText);

  
  

  
  