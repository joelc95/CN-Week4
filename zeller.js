let D = 15;
let M = 8;
let Y = 1995;

function zeller(D, M, Y) {
    if (M<3) {
        M += 12;
        Y -= 1;
    }
    let F = Math.floor(Y/100);
    let L = Y - (100*F);
    

    let S = Math.floor((2.6*M)-5.39) + Math.floor(L/4) + Math.floor(F/4) + D + L - (2*F);
    
    let X = S - (7*Math.floor(S/7))

    // return X;

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    return `You were born on a ${days[X]}!`
}

console.log(zeller(D,M,Y))