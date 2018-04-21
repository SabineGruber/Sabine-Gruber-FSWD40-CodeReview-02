var ProductOne = "trip to Amsterdam";
var ProductTwo = "trip to London";
var PriceOne = 1189;
var PriceTwo = 2360;
var sumOne = (PriceOne + PriceTwo);
document.write("<br>" + "If you want to buy a " + ProductOne + " and a " + ProductTwo + ", it costs " + sumOne + " EUR." + "<br>");

var discountOne = (sumOne / 10);
var discountSumOne = (sumOne - discountOne);
document.write("<br>" + "If you want to buy a " + ProductOne + " and a " + ProductTwo + " as a GoldenCard holder, you will get a 10% discount: " + discountSumOne + "<br>");

var ProductThree = "trip to Rome";
var ProductFour = "trip to Lisbon";
var PriceThree = 2178;
var PriceFour = 2286;
var sumTwo = (PriceThree + PriceFour);
document.write("<br><br>" + "If you want to buy a " + ProductThree + " and a " + ProductFour + ", it costs " + sumTwo + " EUR." + "<br>");

var discountTwo = (sumTwo / 10);
var discountSumTwo = (sumTwo - discountTwo);
document.write("<br>" + "If you want to buy a " + ProductThree + " and a " + ProductFour + " as a GoldenCard holder, you will get a 10% discount: " + discountSumTwo + "<br>");
