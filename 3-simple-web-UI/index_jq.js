

console.log('-index.js-')


$(document).ready(() => {

    let alertBox = $('.alert-info')
    $('.btn-primary').click(e => alertBox.show());
    $('.btn-danger').click(e => alertBox.hide());
    $('.btn-success').click(e => alertBox.text("i wont greet u"));


    $('.btn-dark').click(e => {
        let api = "https://jsonplaceholder.typicode.com/todos?_limit=5";
        $.getJSON(api, function (response) {
            console.log('on success');
            console.log(response);
        })
    });

});