let billAmountEl = document.getElementById("billAmount");
let tipPerEl = document.getElementById("tipPer");
let tipAmountEl = document.getElementById("tipAmount");
let totalAmountEl = document.getElementById("totalAmount");

let errorMsgEl = document.getElementById("errorMsg");



function calAmount(){
   if(billAmountEl.value ==="" || tipPerEl.value === "")
   {
      errorMsgEl.textContent = "Please Enter a Valid Input!!!";
   }

   else{

    let billing = parseInt(billAmountEl.value);
    let tip = parseInt(tipPerEl.value);

    let amount = tipAmountEl.value = billing * (tip/100);

    totalAmountEl.value = billing + amount;

    errorMsgEl.textContent = "";
   }
    
}