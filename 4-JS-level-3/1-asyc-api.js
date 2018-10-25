

// Async API  ==> promise API ( es6 )   or RxJS

/* 
//---------------------------------------------------

let swiggy = {
    getFood() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                setTimeout(() => {
                    console.log('swiggy resolving/rejecting promise..');
                    resolve("FULL BIRYANI");
                    reject("No Food");
                }, 3000)
            }, 3000)
        });
        return promise;
    }
};



let bar = {
    getDrink() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('bar resolving/rejecting promise..');
                resolve("BEER");
                //reject('No Beer')
            }, 1000)
        });
        return promise;
    }
};


//---------------------------------------------------



//---------------------------------------------------

let person = {
    doWork() {
        console.log('person working...');
        console.log('feels hungry, requesting food on swiggy');
        let promise1 = swiggy.getFood();
        let promise2 = bar.getDrink();
        console.log('got promise from swiggy. defer food actions');
        // Promise.all([promise1, promise2])
        Promise.race([promise1, promise2])
            .then((result) => {
                console.log('yummy  with -' + result);
                //return "HALF-BIRYANI"
            }, (error) => {
                console.log('oops ' + error);
            })
        //.then(newResult => console.log('ill pack to Home : ' + newResult))
        console.log('cont.. with other work..');
    }
};
person.doWork();


//---------------------------------------------------















 */



// module-1  : non-ui/service module
//--------------------------------------------------

let service = {
    getService() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("RESULT to rendered component");
            }, 5000);
        })
        return promise;
    }
};

//--------------------------------------------------



// module-2  : ui-module
//--------------------------------------------------

let uiModule = {
    render() {
        console.log('rendered UI');
        let promise = service.getService();//..
        promise.then(result => { console.log(result) })
        console.log('cont.. to show service progress  or render any other UI id required..');
    }
}
uiModule.render();

//--------------------------------------------------