function convert() {
    const celsiusInput = document.getElementById("celsius");
    const resultf = document.getElementById("tem_far");
    
    if (celsiusInput.value !== "") {
        const celsius = parseFloat(celsiusInput.value);
        const fahrenheit = (celsius * 9/5) + 32;
        resultf.textContent = `${fahrenheit.toFixed(2)}`;
      } 
      else {
        resultf.textContent = "0";
      }
      
    const resultk= document.getElementById("tem_kel");
    
    if (celsiusInput.value !== "") {
        const celsius = parseFloat(celsiusInput.value);
        const kelvin = (celsius + 273.15);
        // kelvin = kelvin.toFixed(2);
        resultk.textContent = `${kelvin.toFixed(2)}`;
      } 
      else {
        resultk.textContent = "0";
      }



    const fahrenheitInput = document.getElementById("fahrenheit");
    const resultc = document.getElementById("tem_cel");
    
    if (fahrenheitInput.value !== "") {
        const fahrenheit = parseFloat(fahrenheitInput.value);
        const  celsius= (fahrenheit - 32) * 5/9;
        resultc.textContent = `${celsius.toFixed(2)}`;
      } 
      else {
        resultc.textContent = "0";
      }
      
    const resultkf= document.getElementById("tem_kelf");
    
    if (fahrenheitInput.value !== "") {
        const fahrenheit = parseFloat(fahrenheitInput.value);
        const kelvin = (fahrenheit - 32) * 5/9 + 273.15;
        resultkf.textContent = `${kelvin.toFixed(2)}`;
      } 
      else {
        resultkf.textContent = "0";
      }
}

function toggle(){

}