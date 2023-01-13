function hasOddNumber(arr){
    return arr.some(function(value){
        return value % 2 !== 0;
    });
}

function hasAZero (number){
    return number.toString().split('').some(function(value){
        return value === '0';
    });
}

function hasOnlyOddNumbers (array){
    return array.every(function(value){
        return value % 2 !== 0;
    });
}

function hasNoDuplicates(Arr){
    return Arr.every(function(val){
        return Arr.indexOf(val) === Arr.lastIndexOf(val);
    });
}

function hasCertainKey(arr, key){
    return arr.every(function(val){
        return key in val; 
    });
}

function hasCertainValue(array,key, desriredValue){
    return array.every(function(obj){
        return obj[key] = desriredValue;
    });
}