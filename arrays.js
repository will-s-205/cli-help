let scrimbaUsers = {
    "00": "sindre@scrimba.com",
    "01": "per@scrimba.com",
    "02": "frode@scrimba.com"
}

let scrimbaUser = scrimbaUsers["01"] // per@scrimba
let scrimbaUserKey = scrimbaUsers["sindre@scrimba"] // DOES NOT WORK

let scrimbaUsersEmails = Object.values(scrimbaUsers) // ["sindre@scrimba", "per@scrimba", "frode@scrimba"]
let scrimbaUsersIDs = Object.keys(scrimbaUsers) // ["00", "01", "02"]
let scrimbaUsersEntries = Object.entries(scrimbaUsers) // [["00", "sindre@scrimba"], ["01", "per@scrimba"], ["02", "frode@scrimba"]]

const array = Object.values(scrimbaUsersEntries)
array.forEach(function (data) { console.log(data) })
// OR
for (const data of array) { console.log(data) }
// OR
for (const [key, value] of Object.entries(scrimbaUsersEntries)) { console.log(`${key} - ${value}`) }
// OR
for (let i = 0; i < array.length; i++) { console.log(array[i]) }
