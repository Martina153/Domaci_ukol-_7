console.log('funguju');
/*Vytvořte funkci salary se třemi parametry
wage - hrubá mzda v korunách za hodinu
hours - kolik hodin denně průměrně pracujete
days - kolik dní v měsící průměrně pracujete
Funkce spočítá vaši hrubou měsíční mzdu v celých korunách.
Dále vytvořte funkci taxed, která na vstupu obdrží částku a procento zdanění, a vrátí částku v celých korunách zdaněnou podle zadaných procent.
Použítím funkcí salary a taxed spočítejte svoji měsíční mzdu po 15% zdanění.*/


const salary = (wage, hours, days) => {
    const monthly_salary = Math.round(wage * hours * days);
    return monthly_salary;
}

const taxed = (amount, tax_percent) => {
    const tax_amount = amount * tax_percent / 100;
    const taxed_amount = Math.round(amount - tax_amount);
    return taxed_amount;
  }

const wage = 200; 
const hours = 8; 
const days = 22; 
const gross_monthly_salary = salary(wage, hours, days);
const net_monthly_salary = taxed(gross_monthly_salary, 15);
console.log(`Vaše hrubá měsíční mzda je: ${gross_monthly_salary} Kč`);
console.log(`Vaše měsíční mzda po zdanění 15% je: ${net_monthly_salary} Kč`);


const calculate =(number1, operation,number2) => {
    let result;
    switch (operation) {
      case "+":
        result = number1 + number2;
        break;
      case "-":
        result = number1 - number2;
        break;
      case "*":
        result = number1 * number2;
        break;
      case "/":
        result = number1 / number2;
        break;
      default:
        result = NaN;
        break;
    }
    return result;
  }
