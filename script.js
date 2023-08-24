function initPage() {
    // String Methods
    var welcomeMessage = "Welcome to Sam's Deli!";
    document.getElementById("welcomeMessage").innerText = welcomeMessage.toUpperCase(); // toUpperCase()
    var welcomeText = "Welcome to the best Deli in town.";
    welcomeText = welcomeText.replace("best", "greatest"); // replace()
    welcomeText = welcomeText.concat(" Enjoy your meal!"); // concat()
    welcomeText = welcomeText.slice(0, 36); // slice()
    document.getElementById("welcomeText").innerText = welcomeText.trim(); // trim()

    // Number Methods
    var prices = [5.99, 7.99, 8.99, 6.49];
    var total = prices.reduce((a, b) => a + b, 0); // reduce()
    var averagePrice = (total / prices.length).toFixed(2); // toFixed()
    var maxPrice = Math.max(...prices); // Math.max()
    var minPrice = Math.min(...prices); // Math.min()
    var roundedAverage = Math.round(averagePrice); // Math.round()

    // Array Methods
    var menuItems = ["Burger", "Pizza", "Pasta", "Salad"];
    var menuList = menuItems.join(", "); // join()
    menuItems.sort(); // sort()
    menuItems.push("Soda"); // push()
    menuItems.pop(); // pop()
    var firstItem = menuItems.shift(); // shift()

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
