function getElById(id){
    return document.getElementById(id)    
}

function getTextById(id){
    return getElById(id).innerText;
}

function getValueById(id){
    return getElById(id).value;
}

function getElByElName(name){
    return document.getElementsByName(name)
}

function getElsBySelectors(query){
    let el2 = document.querySelectorAll(query)
    return el2;
}

function setTextById(id, text){
    let myEl = getElById(id)
    // console.log( 'from setTextById fun: ',myEl)
    // console.log( 'from setTextById fun text var: ',text)
    myEl.innerText = text;
}
function setHtmlById(id, text){
    let myEl = getElById(id)
    // console.log( 'from setTextById fun: ',myEl)
    // console.log( 'from setTextById fun text var: ',text)
    myEl.innerHTML = text;
}

function removeClass(id,className){
    let element = getElById(id);
    element.classList.remove(className);
}

function addClassNameById(id, className){
    let element = getElById(id);
    element.classList.add(className);
}

function getTotalPrice(){
    let ticketPrice = 550;
    let quantities = selectedSeats.length;
    return totalPrice = ticketPrice * quantities;
}

function discountCalculation(total, percentage){
    let amountAfterDiscount = (total / 100 ) * percentage; 
    return amountAfterDiscount;
}

function enabledElementByID(id){
    let el = getElById(id)
    el.disabled = false;
}
function disableElementByID(id){
    let el = getElById(id)
    el.disabled = true;
}

