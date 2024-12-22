window.onload = () => {
    window.location.href = '?#beginning';
};

var giftCheck = 0;
var timeInterval = 1000;

let result = '';
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const charactersLength = characters.length;
let counter = 0;
while (counter < 10) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
};

function windowAppearFunc() {
    var giftN = {
        gift1: 'Купон на <b>3000 руб.</b> для нашего ресторана!',
        gift2: 'Купон на <b>5000 руб.</b> для нашего ресторана!',
        gift3: 'Купон на <b>10000 руб.</b> для нашего ресторана!',
        gift4: 'Скидка <b>20%</b> для нашего ресторана!',
        gift5: 'Скидка <b>50%</b> для нашего ресторана!',
        gift6: 'Скидка <b>60%</b> для нашего ресторана!',
        gift7: 'Деньги - <b>5000 руб.</b>!',
        gift8: 'Деньги - <b>10000 руб.</b>!',
        gift9: 'Деньги - <b>15000 руб.</b>!',
        gift10: '<b>2 билета</b> на Рио-Де-Жанейро!!!',
    }

    var giftD = {
        descr1: 'Вы можете использовать его в любом ресторане нашей фирмы. Просто предъявите его официанту перед оплатой заказа.',
        descr2: 'Вы можете использовать скидку в любом ресторане нашей фирмы. Просто предъявите этот выигрыш официанту перед оплатой заказа',
        descr3: 'Поздравляем! Свяжитесь с нами любым способом, чтобы мы смогли переслать вам подарок.',
        descr4: 'Ого! Поздравляем! Свяжитесь с нами чтобы получить ваш выигрыш. И зараннее, приятного отдыха в Бразилии!',
    };

    var x = Math.random();
    console.log(x);

    var prizeName = '';
    var prizeDescr = '';
    var prizeImage = '';

    switch (true) {
        case x >= 0 && x <= 0.1:
            prizeName = giftN.gift1;
            prizeDescr = giftD.descr1;
            prizeImage = './pics/gifts/coupon1.png';
            break;
        case x > 0.1 && x <= 0.2:
            prizeName = giftN.gift2;
            prizeDescr = giftD.descr1;
            prizeImage = './pics/gifts/coupon2.png';
            break;
        case x > 0.2 && x <= 0.3:
            prizeName = giftN.gift3;
            prizeDescr = giftD.descr1;
            prizeImage = './pics/gifts/coupon3.png';
            break;
        case x > 0.3 && x <= 0.4:
            prizeName = giftN.gift4;
            prizeDescr = giftD.descr2;
            prizeImage = './pics/gifts/coupon1.png';
            break;
        case x > 0.4 && x <= 0.5:
            prizeName = giftN.gift5;
            prizeDescr = giftD.descr2;
            prizeImage = './pics/gifts/coupon2.png';
            break;
        case x > 0.5 && x <= 0.6:
            prizeName = giftN.gift6;
            prizeDescr = giftD.descr2;
            prizeImage = './pics/gifts/coupon3.png';
            break;
        case x > 0.6 && x <= 0.7:
            prizeName = giftN.gift7;
            prizeDescr = giftD.descr3;
            prizeImage = './pics/gifts/money1.png';
            break;
        case x > 0.7 && x <= 0.8:
            prizeName = giftN.gift8;
            prizeDescr = giftD.descr3;
            prizeImage = './pics/gifts/money2.png';
            break;
        case x > 0.8 && x <= 0.9:
            prizeName = giftN.gift9;
            prizeDescr = giftD.descr3;
            prizeImage = './pics/gifts/money3.png';
            break;
        case x > 0.9 && x <= 1:
            prizeName = giftN.gift10;
            prizeDescr = giftD.descr4;
            prizeImage = './pics/gifts/plane.png';
            break;
    };

    //непосредственно окна

    var windowItself = document.createElement('div');
    windowItself.classList.add('gift-window')
    var newWindow = document.getElementsByClassName('gifts-div')[0];

    var backdropDiv = document.createElement('div');
    backdropDiv.classList.add('backdrop-div');

    if (giftCheck > 0) {
        var windowAppear = `
        <div class="gift-window2">
            <div class="close-button" id="closeWindowId">
                <img src="./pics/close.png" style="width: 24px;" draggable="false">
            </div>
            <p class="window-title" style="margin-top: 120px;">Вы уже получили ваш подарок.</p>
            <p class="window-gift-descr" style="width: 70%; text-align: center;">Вы не можете получить ещё один подарок. Возвращайтесь в следующем году, вам точно повезет ещё сильнее!</p>
        </div>`;
    } else {
        var windowAppear = `
        <div class="gift-window2">
            <div class="close-button" id="closeWindowId">
                <img src="./pics/close.png" style="width: 24px;" draggable="false" >
            </div>
            <p class="window-title">Вы получили:</p>
            <img class="gift-picture" id="imageId" src="${prizeImage}" style="width: 300px; margin-top: 50px;" draggable="false" >
            <p class="window-gift-descr">${prizeName}</p>
            <p style="text-align: center; width: 50%; font-weight: 100; margin-top: 10px; font-size: 18px;">${prizeDescr}</p>
            <p style="margin-top: 10px; font-weight: 600;"><span>Код подарка: </span>${result}</p>
        </div>`;
    };

    windowItself.innerHTML = windowAppear;

    var deadZone = document.createElement('div');
    deadZone.classList.add('dead-zone');
    newWindow.appendChild(deadZone);

    document.getElementsByClassName('gift-image')[0].style.animation = 'anim3 1s forwards';

    setTimeout(() => {
        newWindow.appendChild(backdropDiv).style.animation = 'anim2 0.5s forwards';
        newWindow.appendChild(windowItself).style.animation = 'anim1 0.5s';

        var closeWindow = document.getElementsByClassName('close-button')[0];
        closeWindow.addEventListener('click', () => {
            backdropDiv.remove();
            windowItself.remove();
            deadZone.remove();
            document.getElementById('giftCode').innerHTML = 'Код вашего подарка: ' + result;
        });
    }, timeInterval);
    giftCheck += 1;
    timeInterval = 0;
    console.log (giftCheck, timeInterval);
};

//начинается список подарков

function windowList() {
    var windowItself = document.createElement('div');
    windowItself.classList.add('gift-list-window');
    var newWindow = document.getElementsByClassName('gifts-div')[0];

    var backdropDiv = document.createElement('div');
    backdropDiv.classList.add('backdrop-div');

    var windowAppear = `
    <div class="gift-window2">
        <div class="close-button" id="closeWindowId" style="margin-left: 530px">
            <img src="./pics/close.png" style="width: 24px;" draggable="false">
        </div>
        <p class="window-title">Список призов:</p>
        <p style="margin-top: 20px; font-size: 20px; font-weight: 300;">Купоны (сертификаты) на определённую сумму</p>
        <div style="text-align: left;">
            <li style="margin-top: 10px">Купон на <b>3000 руб.</b></li>
            <li>Купон на <b>5000 руб.</b></li>
            <li>Купон на <b>10000 руб.</b></li>
        </div>

        <p style="margin-top: 20px; font-size: 20px; font-weight: 300;">Скидка на 1 заказ</p>
        <div style="text-align: left;">
            <li style="margin-top: 10px">Скидка <b>20%</b></li>
            <li>Скидка <b>50%</b></li>
            <li>Скидка <b>60%</b></li>
        </div>

        <p style="margin-top: 20px; font-size: 20px; font-weight: 300;">Денежные призы</p>
        <div style="text-align: left;">
            <li style="margin-top: 10px">Деньги - <b>5000 руб.</b></li>
            <li>Деньги - <b>10000 руб.</b></li>
            <li>Деньги - <b>15000 руб.</b></li>
        </div>
    </div>`;

    windowItself.innerHTML = windowAppear;
    newWindow.appendChild(backdropDiv).style.animation = 'anim2 0.4s forwards';
    newWindow.appendChild(windowItself).style.animation = 'anim1 0.4s';

    var closeWindow = document.getElementsByClassName('close-button')[0];
    closeWindow.addEventListener('click', function () {
        backdropDiv.remove();
        windowItself.remove();
    });
};