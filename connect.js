const cartArray = [];

function display(cartName) {
    const addPlayer = document.getElementById('add-name')
    addPlayer.innerHTML = '';
    // const dlt = document.getElementById('click').disabled = true;

    // dlt.setAttribute('disabled', true)

    for (let i = 0; i < cartName.length; i++) {
        let name = cartArray[i].playerName;
        if (i < 5) {
            let list = document.createElement('li')
            list.innerHTML = ` 
          <li>${i + 1}.  ${name}</li>                 
            `;
            addPlayer.appendChild(list)

        }
        else {
            alert('Please refresh & select again')

        }

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
