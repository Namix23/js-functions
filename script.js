function calculateDiscount(){
  const discountPercentage = .2;
  const fullPrice = 49.99;
  const discount = fullPrice * discountPercentage;
  console.log(Math.round(discount));
}
calculateDiscount();


//function parameters & return values
function calculateDiscount(discountPercentage, fullPrice) {
  return discountPercentage * fullPrice;
}
let percent = 0.15;
let price = 9.99;

let discount = calculateDiscount(percent, price);
let finalPrice = price - discount;

console.log(finalPrice);

//annonymous functions
const getDiscount = function(discountPercentage, fullPrice){
  return discountPercentage * fullPrice;
};

console.log("Discount using annonymous function:");
console.log(getDiscount(.5, 999.99));

//arrow function
let getDiscount2 = (discountPercentage, fullPrice) => {
  return discountPercentage * fullPrice;
};

getDiscount2 = (discountPercentage, fullPrice) => discountPercentage * fullPrice;
console.log(getDiscount2(.5, 999.99));

//callback function
function getFinalPrice (fullPrice, percentOff, callback){
  return fullPrice - callback(percentOff, fullPrice);
}

// const newFinalPrice = getFinalPrice(14.5, .3, calculateDiscount);
// console.log (newFinalPrice);

const newFinalPrice = getFinalPrice(14.5, .3, (x, y) => x * y);
console.log (newFinalPrice);
