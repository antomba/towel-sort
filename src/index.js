module.exports = function towelSort(matrix = []) {
    let twoDimArr = [];
    matrix.forEach((item, index, array) => {
        index % 2 == 0 ? item : item.reverse();
        twoDimArr = array;
    });

    let oneDimArr = [];
    for (var i = 0; i < twoDimArr.length; i++) {
        oneDimArr = oneDimArr.concat(twoDimArr[i]);
    }
    return oneDimArr;
};
