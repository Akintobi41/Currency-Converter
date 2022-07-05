function calculate() {
    let result = document.querySelector(".result");
    let currencyAmmount = document.querySelector(".number").value;

    let firstCurrency = document.querySelector(".select-1").value;

    let secondCurrency = document.querySelector(".select-2").value;

    // color for result

    result.style.color = "#1e90ff";
    result.style.fontSize = "1.5rem";
    result.style.textAlign = "center";
    result.style.fontWeight = "bold";

    //Quick Validations

    if (currencyAmmount <= 0) {
      return alert("Ammount invalid");
    }
    if (firstCurrency == 0 || secondCurrency == 0) {
      alert("Please input some values to get started");
    }

    // DOLLAR CALCULATIONS
    // To BTC
    if (firstCurrency == 1 && secondCurrency == 1) {
      result.innerHTML = currencyAmmount / 33000 + "    <sub>BTC</sub>";
    }
    if (firstCurrency == 1 && secondCurrency == 6) {
      result.innerHTML =
        (currencyAmmount * 610).toFixed(2) + "  <sup>NGN</sup>";
    }
    if (firstCurrency == 6 && secondCurrency == 4) {
      result.innerHTML = (currencyAmmount / 610).toFixed(2) + " <sup>$</sup>";
    }
    if (firstCurrency == 2 && secondCurrency == 6) {
      result.innerHTML =
        (currencyAmmount * 720).toFixed(2) + "  <sup>NGN</sup>";
    }
    if (firstCurrency == 6 && secondCurrency == 5) {
      result.innerHTML =
        (currencyAmmount / 720).toFixed(2) + " <sup>GBP</sup>";
    }
    if (firstCurrency == 3 && secondCurrency == 6) {
      result.innerHTML =
        (currencyAmmount * 426).toFixed(2) + " <sup>NGN</sup>";
    }
    if (firstCurrency == 6 && secondCurrency == 3) {
      result.innerHTML =
        (currencyAmmount / 426).toFixed(2) + " <sup>CAD</sup>";
    }
    if (firstCurrency == 4 && secondCurrency == 6) {
      result.innerHTML = currencyAmmount * 11000000 + " <sup>NGN</sup>";
    }
    if (firstCurrency == 6 && secondCurrency == 1) {
      result.innerHTML = currencyAmmount / 11000000 + " <sup>BTC</sup>";
    }
    if (firstCurrency == 5 && secondCurrency == 6) {
      result.innerHTML =
        (currencyAmmount * 21.24).toFixed(2) + " <sup>NGN</sup>";
    }
    if (firstCurrency == 6 && secondCurrency == 2) {
      result.innerHTML =
        (currencyAmmount / 21.24).toFixed(2) + " <sup>MXN</sup>";
    }
    if (firstCurrency == 6 && secondCurrency == 6) {
      result.innerHTML =
        (currencyAmmount * 1).toFixed(2) + "  <sup>NGN</sup>";
    }
    if (firstCurrency == 1 && secondCurrency == 4) {
      result.innerHTML = (currencyAmmount * 1).toFixed(2) + " <sup>$</sup>";
    }
    if (firstCurrency == 2 && secondCurrency == 5) {
      result.innerHTML =
        (currencyAmmount * 1).toFixed(2) + "  <sup>GBP</sup>";
    }
    if (firstCurrency == 3 && secondCurrency == 3) {
      result.innerHTML =
        (currencyAmmount * 1).toFixed(2) + "  <sup>CAD</sup>";
    }
    if (firstCurrency == 5 && secondCurrency == 2) {
      result.innerHTML = (currencyAmmount * 1).toFixed(2) + " <sup>MXN</sup>";
    }
    // TO USD
    if (firstCurrency == 4 && secondCurrency == 4) {
      result.innerHTML =
        (currencyAmmount * 33000).toFixed(2) + "    <sup>$</sup>";
    }
    // TO PESOS
    if (firstCurrency == 1 && secondCurrency == 2) {
      result.innerHTML =
        (currencyAmmount * 20.3143).toFixed(2) + "  <sup>MXN</sup>";
    }
    // TO USD
    if (firstCurrency == 5 && secondCurrency == 4) {
      result.innerHTML =
        (currencyAmmount / 20.3143).toFixed(2) + "   <sup>$</sup";
    }
    if (firstCurrency == 1 && secondCurrency == 3) {
      result.innerHTML =
        (currencyAmmount * 1.29).toFixed(2) + "   <sup>CAD</sup>";
    }
    if (firstCurrency == 3 && secondCurrency == 4) {
      result.innerHTML =
        (currencyAmmount / 1.29).toFixed(2) + "   <sup>$</sup>";
    }
    if (firstCurrency == 1 && secondCurrency == 4) {
      result.innerHTML = currencyAmmount.toFixed(2) + "    <sup>$</sup>";
    }
    if (firstCurrency == 1 && secondCurrency == 5) {
      result.innerHTML =
        (currencyAmmount * 0.81).toFixed(2) + "    <sup>GBP</sup>";
    }
    if (firstCurrency == 2 && secondCurrency == 4) {
      result.innerHTML =
        (currencyAmmount / 0.81).toFixed(2) + "     <sup>$</sup>";
    }

    // POUNDS CALCULATIONS

    if (firstCurrency == 2 && secondCurrency == 1) {
      result.innerHTML = currencyAmmount / 26782 + "     <sup>BTC</sup>";
    }
    if (firstCurrency == 4 && secondCurrency == 5) {
      result.innerHTML =
        (currencyAmmount * 26782).toFixed(2) + "    <sup>GBP</sup>";
    }
    if (firstCurrency == 2 && secondCurrency == 2) {
      result.innerHTML =
        (currencyAmmount * 25.01).toFixed(2) + "    <sup>MXN</sup>";
    }
    if (firstCurrency == 5 && secondCurrency == 5) {
      result.innerHTML =
        (currencyAmmount / 25.01).toFixed(2) + "    <sup>GBP</sup>";
    }
    if (firstCurrency == 2 && secondCurrency == 3) {
      result.innerHTML =
        (currencyAmmount * 1.59).toFixed(2) + " <sup>CAD</sup>";
    }
    if (firstCurrency == 3 && secondCurrency == 5) {
      result.innerHTML =
        (currencyAmmount / 1.59).toFixed(2) + "  <sup>GBP</sup>";
    }

    if (firstCurrency == 2 && secondCurrency == 5) {
      result.innerHTML = currencyAmmount.toFixed(2) + "  <sup>GBP</sup>";
    }

    if (firstCurrency == 3 && secondCurrency == 1) {
      result.innerHTML = currencyAmmount / 42870 + "<sup>BTC</sup>";
    }
    if (firstCurrency == 4 && secondCurrency == 3) {
      result.innerHTML =
        (currencyAmmount * 42870).toFixed(2) + "<sup>CAD</sup>";
    }
    if (firstCurrency == 3 && secondCurrency == 2) {
      result.innerHTML =
        (currencyAmmount * 15.71).toFixed(2) + "<sup>MXN</sup>";
    }
    if (firstCurrency == 5 && secondCurrency == 3) {
      result.innerHTML =
        (currencyAmmount / 15.71).toFixed(2) + "   <sup>CAD</sup>";
    }
    if (firstCurrency == 3 && secondCurrency == 3) {
      result.innerHTML = currencyAmmount.toFixed(2) + "<sup>CAD</sup>";
    }
    if (firstCurrency == 3 && secondCurrency == 5) {
      result.innerHTML =
        (currencyAmmount / 1.59).toFixed(2) + "<sup>GBP</sup>";
    }

    if (firstCurrency == 4 && secondCurrency == 1) {
      result.innerHTML = currencyAmmount + "<sup>BTC</sup>";
    }
    if (firstCurrency == 4 && secondCurrency == 2) {
      result.innerHTML =
        (currencyAmmount * 668528).toFixed(2) + "   <sup>MXN</sup>";
    }
    if (firstCurrency == 5 && secondCurrency == 1) {
      result.innerHTML = currencyAmmount / 668528 + "   <sup>BTC</sup>";
    }
    if (firstCurrency == 5 && secondCurrency == 2) {
      result.innerHTML = currencyAmmount.toFixed(2) + "<sup>MXN</sup>";
    }
  }