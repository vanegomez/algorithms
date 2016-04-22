//Solution 2

function diffArray2(arr1, arr2) {
    var newArr = [];

    for (var i = 0; arr1.length > i; i++) {
        if (arr2.indexOf(arr1[i]) === -1) {
            newArr.push(arr1[i]);
        }
    }

    for (var j = 0; arr2.length > j; j++) {
        if (arr1.indexOf(arr2[j]) === -1) {
            newArr.push(arr2[j]);
        }
    }

    return newArr;
}