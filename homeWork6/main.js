function getWord(arr, word) {
    let newArr = []
    let result = []
    let tmp = word.split('').sort().join('')
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].split('').sort().join(''))
        if (newArr[i] === tmp) result.push(arr[i])
    }
    return result
}

// getWord(['licnep', 'circular', 'pupil', 'nilcpe', 'leppnec'], 'pencil')

function getSubstring(str, n) {
    let result = [];
    for (let i = 0; i <= str.length - n; i++) {
        result.push(str.substr(i, n))
    }
    return result
}

// getSubstring('123456789qwerasd', 3)
function shuffle(arr) {
    let tmp = 0
    arr.forEach(function (el, ind) {
        let rNum = Math.floor(Math.random() * arr.length)
        tmp = arr[ind]
        arr[ind] = arr[rNum]
        arr[rNum] = tmp
    })
    return arr
}

// shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9])

function concatMany(...arr) {
    let result = [];
    arr.map((el) => {
        result = result.concat(el)
    })
    return result
}

// concatMany(['1', 'hello'], [[1, 2], 2])
// ____________________________________________________________________
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
Array.prototype.myForEach = function (cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i], i, this)
    }
}
arr.myForEach(function (el) {
    return el * 2
})

//________________________________________
Array.prototype.myMap = function (cb) {
    let element = [];
    for (let i = 0; i < this.length; i++) {
        element.push(cb(this[i], i, this))
    }
    return element
}
arr.myMap(function (el) {
    return el * 2

})
//________________________________________

Array.prototype.myFilter = function ( cb) {
    let element = [];
    for (let i = 0; i < this.length; i++) {
        if(cb(this[i], i, this)) element.push(this[i])
    }
    return element
}

arr.myFilter(function (e) {
            // chem hishe inchx kasxater
})
//________________________________________

Array.prototype.myReduce = function (cb){
    let acum = 0;
    for (let i = 0; i < this.length; i++) {
        acum+=this[i]
        cb(acum,this[i])
    }
}
arr.myReduce((total,el)=> console.log(total + el))

const user = {
    username: 'martin',
    password: 'admin',
    balance: 1000000
};

function getUsername(obj) {
    return obj.username
}

getUsername(user)

function getUserBalance(obj,pass) {
    if (pass === obj.password) return obj.balance
    return 'password isn\'t current !'
}

getUserBalance(user,'admin')


function deposid(obj, dep) {
    obj.balance = dep
    return obj.balance
}

deposid(user, 15000)

function resetPassword(obj,oldPass,newPass) {
    if (oldPass === obj.password){
        obj.password = newPass
        return obj.password
    }else{
        return 'access denied'
    }
}

resetPassword(user, 'admin', 'poluadmin')
























