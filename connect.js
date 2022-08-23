const cartArray = [];

function display(cartName) {
    // const addPlayer = document.getElementById('add-name')
    for (let i = 0; i < cartName.length; i++) {
        let Name = cartArray[i].playerName;
        console.log(Name)

        // let list = document.createElement('li')
        // list.innerText = Name;
        // addPlayer.appendChild(list)
    }
}

function addToCart(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;
    const playerobj = {
        playerName: playerName
    }
    cartArray.push(playerobj);
    display(cartArray)

}