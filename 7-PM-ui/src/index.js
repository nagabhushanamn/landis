console.log('-index.js-');
import 'bootstrap/scss/bootstrap.scss';


import $ from 'jquery';


// UI
//-----------------------------------------------------
let viewAllLink = $("#view-all")
viewAllLink.click(e => {
    e.preventDefault();
    productsApiService.loadAllProducts()
        .then(products => {
            let outlet = $('.outlet')
            let arr = [];
            products.forEach((product) => {
                let trTemplate = `
                    <tr>
                        <td>${product.id}</td>
                        <td>${product.name}</td>
                        <td>&#8377;${product.price}</td>
                    </tr>
                `;
                arr.push(trTemplate)
            });
            let tableElement = `
                <table class="table table-bordered table-sm">
                    <tbody>
                        ${arr.join(" ")}  
                    </tbody>
                </table>
            `;
            $('.jumbotron').remove();
            outlet.html(tableElement);
        })
})
//-----------------------------------------------------------------

$('#product-form').on('submit', function (e) {
    e.preventDefault();
    
    let product = {
        id: $(this).find('#id').val(),
        name: $(this).find('#name').val(),
        price: $(this).find('#price').val(),
        description: $(this).find('#description').val()
    }

    let api = "http://localhost:8080/api/products";
    $.ajax(api, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify(product),
        dataType: 'json',
        success: function (response) {
            console.log(response);
        }
    })

})


//-----------------------------------------------------------------

// service
//-----------------------------------------------------------------
let productsApiService = {
    loadAllProducts() {
        let promise = new Promise((resolve, reject) => {
            let api = "http://localhost:8080/api/products";
            $.getJSON(api, function (response) {
                resolve(response);
            });
        });
        return promise;
    }
}
//-----------------------------------------------------
