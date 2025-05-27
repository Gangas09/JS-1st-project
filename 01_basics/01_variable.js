const accountId = 1434
let accountEmail = "sipu2003@google.com"
var accountPassword = "1234"
accountCity = "Bhubaneswar"


// accountId = 2// not allowed
accountEmail = "fc@g"
accountPassword = "223"
accountCity = "Balasorer"
let accountState


console.log(accountId);


/*
Prefer not to use var
Because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])