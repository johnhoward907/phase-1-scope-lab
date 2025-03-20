// Write your solution in this file!
// 1. Declare customerName in global scope
var customerName = "bob";

// 2. Function to uppercase customerName
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// 3. Declare bestCustomer in global scope
function setBestCustomer() {
    bestCustomer = "not bob"; // No `var`, `let`, or `const` means it's globally scoped
}

// 4. Overwrite bestCustomer
function overwriteBestCustomer() {
    bestCustomer = "maybe bob"; // Changing the value of bestCustomer
}

// 5. Declare leastFavoriteCustomer as a constant (cannot be changed)
const leastFavoriteCustomer = "someone";

// 6. Function attempting to change leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "another person"; // ❌ This will throw an error
}
