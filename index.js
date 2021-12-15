// Write your solution in this file!

var customerName = 'bob';
const leastFavoriteCustomer = "Danny"

function fixTheScope() {
    return customerName;
}

function upperCaseCustomerName() {
   customerName = customerName.toUpperCase();

}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer(customer) {
    bestCustomer = customer;
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "Justin"
}