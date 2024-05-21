function calculateTime() {
    let start = new Date();
    let second;
    setTimeout(function() {
        second = new Date();
    },1000)
    console.log(Number(second)-Number(start))
    return second - start
}
calculateTime();