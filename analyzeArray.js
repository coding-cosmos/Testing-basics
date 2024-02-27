function analyzeArray(arr) {
    const avg = (arr.reduce((prv, crnt) => {
        return prv + crnt;
    })) / arr.length;

    const min = arr.reduce((prv, crnt) => {
        return crnt < prv ? crnt : prv;
    });

    const max = arr.reduce((prv, crnt) => {
        return crnt > prv ? crnt : prv;
    });

    return {
        average: avg,
        min: min,
        max: max,
        length:arr.length
    };
}

export default analyzeArray;