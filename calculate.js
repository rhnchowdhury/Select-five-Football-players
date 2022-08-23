
document.getElementById('player-price').addEventListener('click', function () {
    const price = document.getElementById('input-tk')
    const gtvalue = price.value
    let cal = cartArray.length;
    let totalPrice = gtvalue * cal;
    // console.log(totalPrice)

    const amount = document.getElementById('total-tk')
    amount.innerText = totalPrice;
})


// console.log(cal)
