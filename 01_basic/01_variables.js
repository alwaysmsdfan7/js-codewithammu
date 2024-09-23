const accountID = 144553
let accountEmail = "codewithamanmittrpriya@gmail.com"
var accountPassword = "12345"
accountCity = " Jaipur"

// accountID = 2 not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Lucknow"

let accountstate;
/*

Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountID);
console.table([accountID, accountEmail, accountPassword, accountCity, accountstate])
