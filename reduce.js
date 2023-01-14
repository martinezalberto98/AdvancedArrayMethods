function extractValue(array, key){
    return array.reduce(function(accumulator, NextValue){
        accumulator.push(NextValue[key]);
        return accumulator;
    }, []);
}

function vowelCount(string){
    const vowels = 'aeiou';
    return string.split('').reduce(function(acc, char){
        let lowerCase = string.toLowerCase();
        if(vowels.includes(lowerCase)){
            if(acc[lowerCase]){
                acc[lowerCase]++;
            }else{
                acc[lowerCase] =1;
            }
        }
        return acc;
    }, {});
}


function addKeyAndValue(arr, key, value){
    return arr.reduce(function(accum, nextValue, index){
        arr[index][nextValue] = value;
        return accum;
    }, arr)
}


function partition(array, callback){
    return array.reduce(function(acc, nextvalue){
        if(callback[nextvalue]){
            acc[0].push(nextvalue);
        }else {
            acc[1].push(nextvalue);
        }
        return acc;
    }, [[], []])
}