function isogram(str) {
    for (let i = 0; i < str.length - 2; i++) {
        for (let j = i + 1; j < str.length - 1; j++) {
            if (str[i] === str[j]) {
                return true
            }
        }
    }
    return false
}

// isogram('function')

function CheckingNumber(n) {
    while (n >= 1) {
        if (n % 2 === 0) {
            return false
        }
        n = Math.floor(n / 10)
    }
    return true
}

// CheckingNumber(179159753)
function n() {
    let arr = [14, [1, [[[3]], [5]], 1], 0, [], [], [[], [8]]];
    let newArr = []

    function multiDimensionalArray(arr) {
        if (!arr) {
            //stex or console kgrem nor kbere returnov undefined kuda es erevi dasin ha myat qnnarkenq ))
            return newArr;
        }
        for (let i = 0; i <= arr.length - 1; i++) {
            if (!arr[i].length) {
                newArr.push(arr[i])
            }

            multiDimensionalArray(arr[i])
        }
    }

    multiDimensionalArray(arr)
}
n()

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

// calculateDigits(55)

//stex fishken sortavorvaci mej e or hnaravorutyun unenanq stugelu te konkret vor kesi mej e mer target@
// u @st et voroshman kisenq masiv@ middleindex-ic verev kam var u enqan jamank minchev kangninq targeti vra
// middleIndex+1 -- +1@ kgrenq vorovhetev arden et indexy stugel enq u mezi petq che. u  inchqan haskca
// veragreluc heto or nor middleIndex bdi stananq karoxe tivy sxal ga xarnvi irar henc bajanenq 2-i


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 50, 80, 90, 91, 92, 93, 94, 95, 100]

function binarySearch(arr, target) {
    let firstIndex = 0;
    let lastIndex = arr.length - 1
    while (firstIndex <= lastIndex) {
        let middleIndex = Math.floor((firstIndex + lastIndex) / 2)
        if (target === arr[middleIndex]) {
            return 'idnex: ' + middleIndex
        }
        if (target > arr[middleIndex]) {
            firstIndex = middleIndex + 1
        }
        if (target < arr[middleIndex]) {
            lastIndex = middleIndex - 1
        }
    }

    return "Target value not found in array";

}

// console.log(binarySearch(arr, 9))