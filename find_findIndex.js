function findUserByUsername (array, string){
    return array.find(function(user){
        return user[username] === string;
    });
}

function removeUser(arr, str){
    let foundIndex = arr.findIndex(function(user){
        return user[username] === str;
    });
    if(foundIndex === -1) return;
    
    return arr.splice(foundIndex, 1)[0];
}