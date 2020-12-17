var maxAge = 85;
function calculateSupply(age,amountPerDay) {
    var totalAmoung = Math.floor((maxAge - age) * 365 * amountPerDay);
    document.write("You will need " + totalAmoung + " to last you until the ripe  old age of " + maxAge + "<br>");
}
calculateSupply(20,3);
calculateSupply(20,2.5);
calculateSupply(15,3.5);