//Napište funkci selectPlan s jedním parametrem planNumber. 
//Tento parametr bude představovat číslo plánu. 
//Funkce podle čísla plánu vybere ze stránky správný DOM element a přidá k němu CSS třídu plan--selected. 
//Vyzkoušejte vaši funkci v konzoli s různými čísly.
  function selectPlan(planNumber) {
    // najít prvek na stránce podle planNumber
    const planElement = document.querySelector(`#plan${planNumber}`);
    
    // přidat třídu plan--selected
    planElement.classList.add('plan--selected');
  }