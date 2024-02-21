let seats = getElsBySelectors(".seat");



let selectedSeats = [];

function seatClicked(event) {
  // validation number of seats should not be more the three
  let seatNumber = event.target.innerText;
  if (selectedSeats.length > 3) {
    enabledElementByID("coupon");
    alert("you cant buy more then 4 seats at a time");
  } else if (selectedSeats.includes(seatNumber)) {
    alert("same seat cant be purchased twice !");
  } else {
    if (selectedSeats.length >= 3) {
      enabledElementByID("coupon");
      removeClass("applyBtn", "hidden");
    }
    selectedSeats.push(seatNumber);
    // updating total number of seats
    totalSeats = parseInt(getTextById("totalSeats"));
    totalSeats = totalSeats - 1;
    setTextById("totalSeats", totalSeats);
    // updating the background color of selected seat
    // 1. remove class name
    removeClass(seatNumber, "bg-gray-100");
    // 2. add class name
    addClassNameById(seatNumber, "bg-[#1DD100]");
    // updating number of seat selected for calculation section
    let numberOfselectedSeat = parseInt(getTextById("seletedSeatOfCalSec"));
    numberOfselectedSeat = numberOfselectedSeat + 1;
    setTextById("seletedSeatOfCalSec", numberOfselectedSeat);
    // updating total price
    setTextById("totalPriceEl", getTotalPrice());
    // updating line items
    updatingListItem(seatNumber)
    // enabling next btn 
    enableNextBtn()
  }
}

function enableNextBtn(){
    let name = getValueById('userName')
    let phoneNumber = getValueById('phoneNumber')
    if(selectedSeats.length > 0 && name.length > 0 && phoneNumber.length > 0 ){
        enabledElementByID('nextBtn')
    } else { disableElementByID('nextBtn')}
}


function updatingListItem(seatId) {
  let div = document.createElement("div");
  div.innerHTML = `<p class="text-gray-400">${seatId}</p>`;
  let listItems = getElById("listItems");
  listItems.appendChild(div);

  let div2 = document.createElement("div");
  div2.innerHTML = `<p class="text-gray-400">Economy</p>`;
  listItems.appendChild(div2);

  let div3 = document.createElement("div");
  div3.innerHTML = `<p class="text-gray-400">550</p>`;
  listItems.appendChild(div3);
}

function applyCoupon() {
  let givenCoupon = getValueById("coupon");
  givenCoupon = givenCoupon.trim();
  if (givenCoupon !== "NEW15" && givenCoupon !== "Couple 20") {
    alert("Invalid coupon Code !!" + givenCoupon);
  } else {
    if (givenCoupon === "NEW15") {
      percentage = 15;
      console.log("percentage from apply coupon ", percentage);
    }
    if (givenCoupon === "Couple 20") {
      percentage = 20;
      console.log("percentage from apply coupon ", percentage);
    }
    let totalPrice = parseInt(getTextById("totalPriceEl"));
    let discountAmount = discountCalculation(totalPrice, percentage);
    let grantTotal = totalPrice - discountAmount;
    setTextById("grantTotalEl", grantTotal);
    let discountEleStr = `<p class="font-semibold text-end"> Discount  ${discountAmount} </p>`;
    addClassNameById("couponArea", "hidden");
    removeClass("discLabel", "hidden");
    removeClass("discamountDiv", "hidden");
    setTextById("discountAmountEl", discountAmount);
    setHtmlById("couponArea", discountEleStr);
    console.log("apply coupon called this is grant total !!", grantTotal);
  }
}

function next(){
    console.log('next btn cliecked !')
}

