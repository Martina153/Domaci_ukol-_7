+
//Pokud je vstupní řetězec delší než len, tak funkce odřízne jeho konec a vrátí výsledek.
//Pokud je vstupní řetězec kratší než len, tak jej doplní od začátku znakem tečky a vrátí výsledek
//Pokud je vstupní řetězec dlouhý přesně len, funkce jej vrátí beze změny.


  const fillcut = (str, len) => {
    if (str.length > len) {
      return str.slice(0, len);
    } else if(str.length < len){
      return ".".repeat(len - str.length) + str;
    } else if (str.length === len) {
        return  str
    }
  }

//Napište funkci isLeapYear, která jako svůj parametr obdrží celé číslo představující rok. 
//Funkce vrátí true, pokud je zadaný rok přestupný. V opačném případě vrátí false.
//Rok je přestupný, pokud je dělitelný 4 a zároveň není dělitelný 100, nebo je dělitelný 400.

const isLeapYear = (year) => {
    return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
  }
  
  
  
  