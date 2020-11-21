const positiveArr = [2, 5, 64, 89, 12, 34, 56, 84, 121, 8, 67, 49, 65, 48, 12, 34, 485, 1, 2, 3, 45, 6];
const negativeArr = [-25, -35, -15, -2, -3, -4, -5, -6, -89, -32, -52, -63, -41, -62, -69, -8, -9];
const negativeAndPositiveArr = [1, -20, 54, -3, 65, -40, 22, -41, 54, -32, 95, -3, 9, -52, 21, -4];
const textArr = ['hello world', 'heart stone', 'covid 19', 'San Francisco'];

function sortOddAndEvenNumber(arr) {
    let oddArray = [];
    let evenArray = [];
    for (let i in arr) {
        if (arr[i] % 2 == 0) {
            evenArray.push(arr[i])
        } else {
            oddArray.push(arr[i])
        }
    }
    console.log(oddArray)
    console.log(evenArray)
}

// sortOddAndEvenNumber(positiveArr)

function filterRange(arr, start, end) {
    let result = []
    for (let i in arr) {
        if (arr[i] > start && arr[i] < end) {
            result.push(arr[i])
        }
    }
    console.log(result)
}

// filterRange(negativeAndPositiveArr, -60, 20)
const frameWorks = [
    {
        title: 'first object',
        id: 1
    }, {
        title: 'second object',
        id: 2
    }, {
        title: 'third object',
        id: 3
    }, {
        title: 'fourth object',
        id: 4
    }, {
        title: 'fifth object',
        id: 5
    },
]

function findById(obj, id) {
    let tmp = 'No data'
    for (let i in obj) {
        if (obj[i].id === id) {
            tmp = obj[i]
            break
        }

    }
    console.log(tmp)

}

// findById(frameWorks, 22)

function generatingObjectInArray(arr) {
    let newArr = [];
    for (let i in arr) {
        newArr.push({name: arr[i], id: i})
    }
    console.log(newArr)
}

// generatingObjectInArray(textArr)

function removeElement(arr, v) {
    let newArr = [];
    let toLowerCase = '';
    action:for (let i in arr) {
        for (let j in arr[i]) {
            toLowerCase = arr[i][j].toLowerCase()
            if (toLowerCase === v) {
                continue action
            }
        }
        newArr.push(arr[i])
    }
    console.log(newArr)
}

// removeElement(textArr, 'l')

function lengthenString(str1, str2) {
    let tmp = '';
    let differentLen = 0;
    if (str1.length < str2.length) {
        tmp = str1
        differentLen = str2.length - str1.length
        for (let i = 0; i < differentLen; i++) {
            tmp += str1[i]
        }
    } else {
        tmp = str2
        differentLen = str1.length - str2.length
        for (let i = 0; i < differentLen; i++) {
            tmp += str2[i]
        }
    }
    console.log(tmp)
}

lengthenString('space', 'ilonmask')

