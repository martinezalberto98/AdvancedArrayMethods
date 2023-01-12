function filterByValue(arr, key){
    return arr.filter(function(obj){
        return arr.key !== undefined; 
    });
}

function find (arr, desiredValue){
    return arr.filter(function(number){
        return number === desiredValue;
    });
}

function findObj (obj, key, searchValue){
    return obj.filter(function(val){
        return val[key] = searchValue;
    });
}

function removeVowels (string){
    let vowels = 'AaEeIiOoUu';
    return string.split('').filter(function(char){
        return vowels.indexOf(char) === -1;
    }).join('');
}

function doubleOddNumbers (array){

    let oddValues = array.filter(function(value){
        if(value % 2 !== 0){
            return value;
        }
    });

    oddValues.map(function(value){
        return value * 2;
    });
}