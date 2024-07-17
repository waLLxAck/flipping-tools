function calculatePurchasePrice(sellingPrice, ebayFeePercentage = 13, desiredProfit = 75) {
    // Calculate the actual amount the seller makes after eBay fees
    let netSellingPrice = sellingPrice * (1 - ebayFeePercentage / 100);
    
    // Calculate the maximum purchase price to achieve the desired profit
    let maxPurchasePrice = netSellingPrice - desiredProfit;
    
    return maxPurchasePrice;
}

function calculate() {
    let sellingPrice = parseFloat(document.getElementById('sellingPrice').value);
    if (isNaN(sellingPrice)) {
        document.getElementById('result').innerText = "Please enter a valid number.";
    } else {
        let maxPurchasePrice = calculatePurchasePrice(sellingPrice);
        document.getElementById('result').innerText = `Price to buy: £${maxPurchasePrice.toFixed(2)}`;
    }
}
