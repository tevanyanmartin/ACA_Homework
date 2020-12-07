function removeFirstElement() {
    //Eric jan dasi vaxt qnnarkel ein mi tarberak chuzeci adpes enei urishel mtqis chekav aranc 2rd array
    let arr1 = [1, 2, 3, 4, 5, 6, 7, 'f'];
    let newArr = [];

    function recFunc(arr, len) {
        if (len <= 0) {
            return newArr.reverse();
        } else {
            newArr.push(arr[len]);
            return recFunc(arr, len - 1);
        }
    }

    console.log(recFunc(arr1, arr1.length - 1))
}

// removeFirstElement()
let obj = {
    a: 1,
    b: 2,
    c: 2,
    d: 3,
    e: 2,
    f: 1,
    g: 4,
    h: 3,
    i: 7
}

function replaceKeyAndValue(obj) {
    let newObj = {}
    let tmp = '';
    let count = 0;
    for (let key1 in obj) {
        newObj[obj[key1]] = key1
    }
    for (let key in obj) {
        if (newObj.hasOwnProperty(obj[key])) {
            if (newObj[obj[key]] !== key && newObj[obj[key]].indexOf(key)) {
                tmp = newObj[obj[key]] = Object.values(newObj[obj[key]])
                console.log(key + obj[key])
                tmp.push(key)
            }
        }
    }

    console.log(newObj)
}

// replaceKeyAndValue(obj)

let books = [
    {book: "Catcher in the Rye", readStatus: true, percent: 40},
    {book: "Animal Farm", readStatus: true, percent: 20},
    {book: "Solaris", readStatus: false, percent: 90},
    {book: "The Fall", readStatus: true, percent: 50},
    {book: "White Nights", readStatus: false, percent: 60},
    {book: "After Dark", readStatus: true, percent: 70}
];

function sortByPercent(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].readStatus === true) {
            newArr.push(arr[i])
        }
    }
    let tmp = ''
    for (let i = 0; i < newArr.length; i++) {
        for (let j = 0; j < newArr.length - 1 - i; j++) {
            if (newArr[j].percent > newArr[j + 1].percent) {
                tmp = newArr[j];
                newArr[j] = newArr[j + 1];
                newArr[j + 1] = tmp
            }
        }
    }
    console.log(newArr)
}

// sortByPercent(books)

const treeNodes = [
    {parent: null, id: 0},
    {parent: 0, id: 1},
    {parent: 0, id: 2},
    {parent: 1, id: 3},
    {parent: 1, id: 4},
    {parent: 2, id: 5},
    {parent: 4, id: 6}
]
let ex = {
    0: {
        1: {
            3: {},
            4: {
                6: {}
            }
        },
        2: {
            5: {}
        }
    }
}
console.log(ex)

function tree(arr) {
    let newObj = {}

    for (let i of arr) {
        if (i.parent === null) {
            newObj[i.id] = i
        }
        for (let j in newObj) {
            if (!newObj.hasOwnProperty(i.id)) {
                newObj[i.id][j]
                // newObj[i.id] = i
                // console.log(newObj)
            } else {
                console.log(newObj.hasOwnProperty(i.id))
            }
        }
    }
    console.log(newObj)
}

tree(treeNodes)

function rotateArray() {
    let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    let tmp = ''

    function rec(arr, n) {
        if (n === 0) {
            return arr
        } else if (n > 0) {
            tmp = arr[0];
            arr.splice(0, 1)
            arr.push(tmp)
            return rec(arr, n - 1)
        } else if (n < 0) {
            tmp = arr[arr.length - 1];
            arr.splice(-1)
            arr.unshift(tmp)
            console.log(tmp)
            return rec(arr, n + 1)
        }
    }

    rec(arr, -3)

    console.log(arr)
}

// rotateArray()
let arr = [1, 2, 3, 4, 5]

function getTwoDimensionalArrays(arr, n) {
    let newArr = [];
    let tmp = [];
    let count = 0;
    for (let i = 0; i <= arr.length - n; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            // if (tmp.length-1 >=  n) {
            tmp.push(arr[i])
            tmp.push(arr[j])
            newArr.push(tmp)
            tmp = []
            // }else {
            //     tmp.push(arr[i])
            //     tmp.push(arr[j])
            // }
        }
    }
    console.log(newArr)
}

// getTwoDimensionalArrays(arr, 2)