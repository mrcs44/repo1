const nbYear = (p0, percent, aug, p) => {
    let numyears = 0
    let newpop = p0;
    while(newpop < p){
        newpop = newpop + (newpop * (percent / 100)) + aug;
        numyears = numyears++;
    }
    return numyears;
}