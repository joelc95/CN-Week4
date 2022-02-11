// ACTIVITY 1
let hello = (arg) => {
    if (!arg) {
        return console.log("Hello you");    
    }
    return console.log(`Hello ${arg}`);
}

const repeater = (n, fn, optional) => {
    if (!optional) {
        for (let i=0; i<n; i++) {
            fn();
        }
    } else {
        for (let i=0; i<n; i++) {
            fn(optional);
        }
    }
}

repeater(4, hello, "Joel")
repeater(3, hello)