let errorFilter = (array) => {
    // let max = array[0];
    // for (i = 1; i <= array.length; i++) {
    //     if (array[i] > max) {
    //         max = array[i];
    //max = Math.max(...array);

    let erfilter = array.filter((n) => n !== "error");

    max = Math.max(...erfilter);
    min = Math.min(...erfilter);

    finalarray = max - min;
    return finalarray;
};

console.log(errorFilter([1, 2, 3, "error", 6, 8, 10, -5, -2, 12]));



