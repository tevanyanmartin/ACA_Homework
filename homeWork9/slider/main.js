let imgDiv = document.getElementsByClassName('img')
let lengthImgDiv = 100* (imgDiv.length-1)
let nextClick = document.getElementById('next-div');
let prevClick = document.getElementById('prev-div');
let imgsMainDiv = document.getElementById('imgs');
let tmpWidth = 0;
nextClick.addEventListener('click',function(){
    if ( tmpWidth < lengthImgDiv ){
        tmpWidth+=100
        imgsMainDiv.style.right = tmpWidth+'%'
    }else if (tmpWidth === lengthImgDiv ){
        tmpWidth=0
        imgsMainDiv.style.right = tmpWidth+'%'
    }
})
prevClick.addEventListener('click',function(){
    if ( tmpWidth > 0 ){
        tmpWidth-=100
        imgsMainDiv.style.right = tmpWidth+'%'
    }else if (tmpWidth === 0 ){
        tmpWidth=lengthImgDiv
        imgsMainDiv.style.right = tmpWidth+'%'
    }
})




