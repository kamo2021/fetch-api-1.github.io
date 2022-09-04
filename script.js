fetch('https://fakestoreapi.com/products')
    .then((data) => {
        return data.json()
    })
    .then((response) => {
        console.log(response);
        let main = document.querySelector('main');
        let productItem = document.createElement('div');
        productItem.classList.add('product-item')
        response.forEach((val) => {
            productItem.innerHTML += `
            <div class='item'>
                <img src='${val.image}' />
                <p>${val.title.substring(0,5) + '...'}</p>
                <p>${val.category}</p>
                <p>${'$' + val.price}</p>
                <button>Add</button>
            </div>
            `
        });
        main.appendChild(productItem);
        var batn = document.getElementsByTagName('button');
        let a = [...batn];
        
    })
    .catch((error) => {
        console.log(error)
    });
