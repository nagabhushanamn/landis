

//--------------------------------------------------------

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     setInterval(() => {
//         this.age++;
//         console.log(this.name + " - " + this.age);
//     }, 1000);
// }
// new Person('P1', 0)

//--------------------------------------------------------


let tnr = {
    name: 'Nag',
    doTeach: function () {
        console.log(this);
        console.log(this.name + " teaching .js");
    }
};

let teachBtn = document.getElementById('teachBtn');
// teachBtn.addEventListener('click', tnr.doTeach);

// teachBtn.addEventListener('click', function (e) {
//     tnr.doTeach();
// })

// or

// teachBtn.addEventListener('click', tnr.doTeach.bind(tnr))