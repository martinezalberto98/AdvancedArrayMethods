function doublesVariables(arr) {
    let answer =[];
    arr.forEach(function(val){
        answer.push(val*2);
    });
    return answer;

}

function onlyEvenvariables(arr){
    let finalArr = [];
    arr.forEach(function(value){
        if(value % 2 === 0){
            finalArr.push(value);
        }
    });
    return finalArr;
}

function showFirstAndLast(arr){
    let finalArray = [];
    arr.forEach(function(str){
        finalArray.push(str[0]+str[str.length-1]);
    });
    return finalArray;
}

function addKeyAndValue(arr,key,value){
    let newArray =[];
    arr.forEach(function(obj){
        obj[key] = value;
    });
    return newArray;
}

function vowelCount(string){
    let vowels = 'aeiou';
    let result = {};
    string.toLowerCase().split('').forEach(function(character){
        if(vowels.indexOf(character)!== -1){
            result[character] ? result[character]++ : result[character] = 1;
        }
    });
    return result;
}