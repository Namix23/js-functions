function calculateDiscount(){
  const discountPercentage = .2;
  const fullPrice = 49.99;
  const discount = fullPrice * discountPercentage;
  console.log(Math.round(discount));
}
calculateDiscount();


//function parameters
function calculateDiscount(discountPercentage, fullPrice) {
  const discount = discountPercentage * fullPrice;
}
calculateDiscount(0.15, 300);
