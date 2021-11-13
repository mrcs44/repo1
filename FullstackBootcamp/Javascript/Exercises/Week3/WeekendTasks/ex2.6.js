const yearToCentury = (year) => { 
    const yearStr = year.toString();
    const year2Digits = yearStr.slice(0,2);
    let twoDigYear = parseInt(year2Digits);
    console.log(twoDigYear, typeof(twoDigYear));

    return ++twoDigYear;

};

console.log(yearToCentury(1960));