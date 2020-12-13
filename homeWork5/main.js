function isogram(str) {
    let tmp = true
    for (let i = 0; i < str.length - 2; i++) {
        for (let j = i + 1; j < str.length - 1; j++) {
            if (str[i] === str[j]) {
                tmp = false
                break
            }
        }
    }
    return tmp
}

// console.log(isogram('function'))

function CheckingNumber(n) {
    while (n >= 1) {
        if (n % 2 === 0) {
            return false
        }
        n = Math.floor(n / 10)
    }
    return true
}

// console.log(CheckingNumber(179159753))


function multiDimensionalArray() {
    let arr = [14, [1, [[[3]], [5]], 1], 0];
    let newArr = []

    function rec(arr) {
        if (!arr) {
            console.log(newArr)
        }
        for (let i in arr) {
            if (!arr[i].length) {
                newArr.push(arr[i])
            }

            rec(arr[i])
        }
    }

    rec(arr)
}

// multiDimensionalArray()


function calculateDigits(n) {
    let toStr = n.toString()
    let tmp = 0
    for (let i = 0; i < toStr.length; i++) {
        tmp += +toStr[i]
    }
    if (tmp <= 9) {
        return tmp
    } else {
        return calculateDigits(tmp)
    }


}

// console.log(calculateDigits(9999999999956))

//stex fishken sortavorvaci mej e or hnaravorutyun unenanq stugelu te konkret vor kesi mej e mer target@
// u @st et voroshman kisenq masiv@ middleindex-ic verev kam var u enqan jamank minchev kangninq targeti vra
// middleIndex+1 -- +1@ kgrenq vorovhetev arden et indexy stugel enq u mezi petq che. u  inchqan haskca
// veragreluc heto or nor middleIndex bdi stananq karoxe tivy sxal ga xarnvi irar henc bajanenq 2-i


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 50, 80, 90, 91, 92, 93, 94, 95, 100]

function binarySearch(arr, target) {
    let firstIndex = 0;
    let lastIndex = arr.length - 1
    while (firstIndex <= lastIndex) {
        let middleIndex = Math.floor((firstIndex + lastIndex) / 2)
        // console.log(middleIndex)
        if (target === arr[middleIndex]) {
            return console.log('idnex: ' + middleIndex)
        }
        if (target > arr[middleIndex]) {
            console.log("Searching the right side of Array")
            firstIndex = middleIndex + 1
        }
        if (target < arr[middleIndex]) {
            console.log("Searching the left side of array")
            lastIndex = middleIndex - 1
        } else {
            console.log("Not Found this loop iteration. Looping another iteration.")
        }
    }

    console.log("Target value not found in array");

}

// binarySearch(arr,9)