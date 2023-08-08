function convertToCelsius() {
    const celsiusInput = document.getElementById("celsius").value;
    const celsius = parseFloat(celsiusInput);
    if (isNaN(celsius)) {
      alert("Please enter a valid temperature in Celsius.");
      return;
    }
    const fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("result").innerText = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
  }
  
  function convertToFahrenheit() {
    const fahrenheitInput = document.getElementById("celsius").value;
    const fahrenheit = parseFloat(fahrenheitInput);
    if (isNaN(fahrenheit)) {
      alert("Please enter a valid temperature in Fahrenheit.");
      return;
    }
    const celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById("result").innerText = `${fahrenheit}°F is ${celsius.toFixed(2)}°C`;
  }
  