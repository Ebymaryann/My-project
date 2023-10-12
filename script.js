
function detectAndDisplayLogo(phoneNumber) {
    
    const formContainer = document.querySelector('.body');
    const imageElement = document.getElementById('carrierLogo');

    if (phoneNumber.startsWith('0803') || phoneNumber.startsWith('0806') || phoneNumber.startsWith('0703') || phoneNumber.startsWith('0706') || phoneNumber.startsWith('0814')) {
        imageElement.src = './img/mtn.png'; 
        formContainer.style.backgroundColor = 'yellow';

    }else if (phoneNumber.startsWith('0805') || phoneNumber.startsWith('0807') || phoneNumber.startsWith('0705') || phoneNumber.startsWith('0815') || phoneNumber.startsWith('0905')){
        imageElement.src = './img/Glo.jpg';
        formContainer.style.backgroundColor = 'lightgreen';


    }else if(phoneNumber.startsWith('0802') || phoneNumber.startsWith('0808') || phoneNumber.startsWith('0708') || phoneNumber.startsWith('0701') || phoneNumber.startsWith('0902') || phoneNumber.startsWith('0907')) {
        imageElement.src = './img/Airtel.png';
        formContainer.style.backgroundColor = 'lightcoral';

    }else if (phoneNumber.startsWith('0809') || phoneNumber.startsWith('0817') || phoneNumber.startsWith('0909')) {
        imageElement.src = './img/9Mobile.jpg'
        formContainer.style.backgroundColor = 'darkgreen'

    }
     else {
        document.body.style.backgroundImage = "url('./img/Telecom.jpg')";
        imageElement.src = ''; 
    }
}



