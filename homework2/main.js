function f1() {
    let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
    let emptyArr = [];
    let val = +prompt(`Array: ${arr}`)
    for (let i = 0; i < arr.length; i++) {
        if (val < arr[i]) {
            emptyArr.push(arr[i])
        }
    }
    console.log(`Result home work 1: ${emptyArr}`)
}

// f1()
function f2() {
    let pr1 = +prompt('number1')
    let pr2 = +prompt('number2')
    let toStr = '';
    let newArr = [];
    action:for (; pr1 <= pr2; pr1++) {
        toStr = String(pr1)
        for (let i = 0; i < toStr.length; i++) {
            if (+toStr[i] % 2 !== 0) {
                continue action
            }
        }
        newArr.push(+toStr)
    }
    return newArr
}

// console.log(f2())
function f3() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 9, 4, 10, 11, 12, 13, 15, 16, 17, 18, 19];
    let newArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] <= arr[i + 1]) {
            continue
        } else {
            newArr.push(`Index: ${i + 1}, Value: ${arr[i + 1]}`)
        }
    }
    if (newArr.length === 0) {
        newArr.push('-1')
    }
    return newArr
}

// console.log(f3())
function f4() {
    let arr = [20, 15, 35, 12, 48, 23, 45, 1, 32, 12, 2, 3, 45, 5, 8, 7, 1, 56, 12, 1]
    let newArr = []
    for (let i = 1; i < arr.length - 1; i++) {
        newArr.push(arr[i - 1] * arr[i + 1])
    }
    console.log(Math.max.apply(Math, newArr))
}

// f4()
function f5() {
    let arr = [65, 84, 68, 95, 32, 15, 78, 64, 62, 69, 75, 76, 77, 79, 20, 21, 31, 32, 33, 16];
    let temp = 0;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1];
                arr[j + 1] = arr[j]
                arr[j] = temp
            }

        }
    }
    console.log(`Old array: ${arr}`)
    for (let l = arr[0]; l < arr[arr.length - 1]; l++) {
        if (arr.indexOf(l) === -1) {
            newArr.push(l)
        }
    }
    console.log(`New array: ${newArr}`)


}

f5()

function f6() {
    let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [-1, -2, -3, 4, 5, 6]];
    let newArr = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
        }
        newArr.push(sum)
        sum = 0;
    }
    console.log(newArr)
}

// f6()

function f7() {
    let arr = [1, 2, 25, 40, 50, 88, 75, 11, -11];
    let oddArr = [];
    let multipliedArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            oddArr.push(arr[i])
        }
    }
    for (let j = 0; j < oddArr.length; j++) {
        multipliedArr.push(oddArr[j] * oddArr.length)
    }
    console.log(multipliedArr)
}

// f7()







