


let myFuntions = []
//--------------------------------------------
function getF(i) {
    var f = function () {
        console.log(i);
    }
    return f;
}
for (var i = 0; i < 2; i++) {
    myFuntions.push(getF(i))
}
//--------------------------------------------
myFuntions[0]();
myFuntions[1]();

