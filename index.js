var customerName = "bob";
var bestCustomer;
const leastFavoriteCustomer = "ALi BOB";

function upperCaseCustomerName() { return customerName = customerName.toUpperCase(); }
function setBestCustomer() { return bestCustomer = "not bob"; }
function overwriteBestCustomer() { return bestCustomer = "maybe bob"; }
function changeLeastFavoriteCustomer() { return leastFavoriteCustomer; }

console.log(upperCaseCustomerName());
console.log(setBestCustomer());
console.log(overwriteBestCustomer());
console.log(changeLeastFavoriteCustomer());