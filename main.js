const divArray = document.querySelectorAll(".section--secondary .container");
const linkArray = document.querySelectorAll(".section--secondary .menu__item");
const searchButton = document.querySelector('.form__label');
const closeButton = document.querySelector('.form__icon');
const parcoursDiv = document.querySelectorAll('.container__list--parcours .block');

function setPage() {
    for(let i=0; i<divArray.length;i++) {
        divArray[i].style.display = "none";
    }
    changePageTo(0);
}

function changePageTo(index) {
    for(let i=0; i<divArray.length;i++) {
        divArray[i].style.display = "none";
        linkArray[i].classList.remove('menu__item--active');
        linkArray[i].style.fontWeight = "500";
    }
    divArray[index].style.display = "inline-block";
    linkArray[index].classList.add('menu__item--active');
    linkArray[index].style.fontWeight = "600";
}

function addMoney() {
    let moneyCounter = document.querySelector('.block .block__span--green').innerHTML;
    let moneyNumber = parseInt(moneyCounter.split(' ')[0]);


    moneyNumber += 1;
    if(moneyNumber > 60){
        moneyNumber = 60;
    }

    let moneyString = moneyNumber.toString() + ' €';
    document.querySelector('.block .block__span--green').innerHTML = moneyString;

    let moneyPercentage = document.querySelector('.block .block__progress--green');
    let moneyPercentageNumber = moneyNumber*1.66666666667 + '%';
    moneyPercentage.style.width = moneyPercentageNumber;
}

function addFavorite() {
    let hearticon = document.querySelector('.block #block--icon');
    if(hearticon.style.fill === 'red'){
        hearticon.style.fill = '#282828'
    } else {
        hearticon.style.fill = 'red';
    }
}

function activateSearchForm() {
    let formInput = document.querySelector(".form__input");
    let formClose = document.querySelector(".form__icon");
    formInput.classList.add('form__input--active');
    formClose.classList.add('form__icon--active')

}

function desactivateSearchForm() {
    let formInput = document.querySelector(".form__input");
    let formClose = document.querySelector(".form__icon");
    formInput.classList.remove('form__input--active');
    formClose.classList.remove('form__icon--active')
}

for (let i = 0; i < parcoursDiv.length; i++) {
    (function () {
        let content = parcoursDiv[i].lastElementChild;
        console.log(content);
        parcoursDiv[i].addEventListener("click", function() {
            content.classList.toggle('block__content--hidden');
        }, false);
    }());
}

setPage();
searchButton.addEventListener('click', activateSearchForm);
closeButton.addEventListener('click', desactivateSearchForm);