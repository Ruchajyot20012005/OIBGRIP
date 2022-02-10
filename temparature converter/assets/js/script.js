const calculateTemp = () => {
  const temperature = document.getElementById("temp").value;
  console.log(temperature);

  const selectedOption = document.getElementById("temp-diff");
  const value = selectedOption.options[selectedOption.selectedIndex].value;
  console.log(value);

  const celToFah = (cel) => {
    let fahrenheit = cel * (9 / 5) + 32;
    return fahrenheit;
  };

  const FahToCel = (fah) => {
    let celsius = (fah - 32) * (5 / 9);
    return celsius;
  };

  let result;

  if (value == "cel") {
    result = celToFah(temperature);
    document.getElementById(
      "calculatedTemp"
    ).innerHTML = `${result}°Fahrenheit`;
  } else {
    result = FahToCel(temperature);
    document.getElementById("calculatedTemp").innerHTML = `${result}°Celsius`;
  }
};
