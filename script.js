function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const tempUnit = document.getElementById('tempUnit').value;
    let result;
    
    if (tempUnit === 'celsius') {
      result = (inputTemp * 9/5) + 32;
      document.getElementById('result').innerHTML = `${inputTemp} Celsius is equal to ${result} Fahrenheit`;
    } else if (tempUnit === 'fahrenheit') {
      result = (inputTemp - 32) * 5/9;
      document.getElementById('result').innerHTML = `${inputTemp} Fahrenheit is equal to ${result} Celsius`;
    }
  }
  