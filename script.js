function initPage() {
    // String Methods
    var welcomeMessage = "Welcome to Sam's Deli!";
    document.getElementById("welcomeMessage").innerText = welcomeMessage.toUpperCase(); // toUpperCase()
    var welcomeText = "Welcome to the best Deli in town.";
    welcomeText = welcomeText.replace("best", "greatest"); // replace() a word
    welcomeText = welcomeText.concat(" Enjoy your meal!"); // concat() concatenate two strings
    welcomeText = welcomeText.slice(0, 36); // slice() a string from index 0 to 36
    document.getElementById("welcomeText").innerText = welcomeText.trim(); // trim() removes whitespace from both sides of a string

    // Number Methods
    var prices = [5.99, 7.99, 8.99, 6.49]; // array of prices
    var total = prices.reduce((a, b) => a + b, 0); // reduce() to sum all prices
    var averagePrice = (total / prices.length).toFixed(2); // toFixed() to round to 2 decimal places
    var maxPrice = Math.max(...prices); // Math.max() to find max price
    var minPrice = Math.min(...prices); // Math.min() to find min price
    var roundedAverage = Math.round(averagePrice); // Math.round() to round to nearest integer

    // Array Methods
    var menuItems = ["Burger", "Pizza", "Pasta", "Salad"];
    var menuList = menuItems.join(", "); // join() to create a string from an array
    menuItems.sort(); // sort() to sort an array
    menuItems.push("Soda"); // push() to add an item to the end of an array
    menuItems.pop(); // pop() to remove the last item of an array
    var firstItem = menuItems.shift(); // shift() to remove the first item of an array

    document.getElementById("menu").innerHTML = `
    <table>
        <tr><th>Average menu price</th><td>$${averagePrice}</td></tr>
        <tr><th>Max Price</th><td>$${maxPrice}</td></tr>
        <tr><th>Min Price</th><td>$${minPrice}</td></tr>
        <tr><th>Rounded Average Price</th><td>$${roundedAverage}</td></tr>
        <tr><th>Menu Items</th><td>${menuList}</td></tr>
        <tr><th>Sorted Menu Items</th><td>${menuItems.join(", ")}</td></tr>
        <tr><th>First Item</th><td>${firstItem}</td></tr>
    </table>
`;

// Date Methods
var date = new Date();
var currentYear = date.getFullYear(); // getFullYear() 
var month = date.toLocaleString('default', { month: 'long' }); // toLocaleString()
var day = date.getDate(); // getDate()
var hours = date.getHours(); // getHours()
var minutes = date.getMinutes(); // getMinutes()

document.getElementById("currentInfo").innerHTML = `
    <table>
        <tr><th>Copyright</th><td>© ${currentYear}</td></tr>
        <tr><th>Current Month</th><td>${month}</td></tr>
        <tr><th>Current Day</th><td>${day}</td></tr>
        <tr><th>Current Time</th><td>${hours}:${minutes}</td></tr>
    </table>
`;

// Function Methods
var calculateDiscount = function(price) {
    return (price * 0.9).toFixed(2);
};
var discountedPrices = prices.map(calculateDiscount); // map()
var totalDiscount = discountedPrices.reduce((a, b) => parseFloat(a) + parseFloat(b), 0); // reduce()

document.getElementById("discountInfo").innerHTML = `
    <table>
        <tr><th>Discounted Prices</th><td>$${discountedPrices.join(", $")}</td></tr>
        <tr><th>Total Discount</th><td>$${totalDiscount.toFixed(2)}</td></tr>
    </table>
`;


}
