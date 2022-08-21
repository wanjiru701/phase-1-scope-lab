var customerName=`bob`;

function upperCaseCustomerName() {
    customerName=customerName.toUpperCase();
}

var bestCustomer=`not bob`
function setBestCustomer(){
    bestCustomer=`not bob`;
}
setBestCustomer();

function overwriteBestCustomer() {
    return bestCustomer= `maybe bob`;
}

function changeLeastFavoriteCustomer() {
    const leastFavoriteCustomer= `fifi`;
    leastFavoriteCustomer=`kamami`;
}