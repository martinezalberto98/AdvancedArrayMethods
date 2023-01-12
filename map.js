function doubleValuesWithMap (arr) {
    arr.map(function(val){
        return val*2;
    });
}

function valTimesIndex (arr){
    const valueTimesIndex = arr.map(function(value, index){
        return value * index;
    });
}

function extractKey (arr, key){
    const getKey = arr.map(function(value){
        return value.key;

    });
}

function extractFullName(arr){
    const fullName = arr.map(function(obj){
        return obj.first + " " + obj.last;

    });
}