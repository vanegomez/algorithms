function sumAll(arr) {
    max = Math.max(arr[0], arr[1]);
    min = Math.min(arr[0], arr[1]);
    total = [];

    for (var i = min; i <= max; i++){
        total.push(i);
    }

    result = total.reduce(function(prev, current){
        return prev + current;
    });

    return result;
}