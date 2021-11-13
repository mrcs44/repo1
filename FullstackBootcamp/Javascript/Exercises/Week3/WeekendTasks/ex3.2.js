result = arr.reduce((a, [wentOn, wentOff]) => {
    return a + wentOn - wentOff;
});