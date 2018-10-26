

function* gen() {
    let v = 0;
    while (true) {
        v++;
        yield v;
    }
}

let it=gen();
it.next();