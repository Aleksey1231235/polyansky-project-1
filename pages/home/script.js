const homeMainImg = document.getElementById('homeMainImg');
const homeMainImges = [
    'bimKab1.png',
    'bimKab2.png',
    'bimKab3.png',
]
const speedReplace = 3000; // каждые 3 сек заменять картинку

let indexhomeMainImg = 0;
setInterval(() => {
    const indexhomeMainImgAfter = indexhomeMainImg + 1;
    if (indexhomeMainImgAfter < homeMainImges.length) {
        indexhomeMainImg++
    } else {
        indexhomeMainImg = 0;
    }

    homeMainImg.src = `../../assets/images/home/${homeMainImges[indexhomeMainImg]}`;
}, speedReplace);