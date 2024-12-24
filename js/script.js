const container = document.querySelector('.container');
const qrCodeBtn = document.querySelector('#qr-form button');

const qrCodeInput = document.querySelector('#qr-form input')

const qrCodeImg = document.querySelector('#qr-code img')

// Eventos
function generateQR(){

    const qrCodeInputValue = qrCodeInput.value

    if(!qrCodeInputValue) return;

    qrCodeBtn.innerHTML = 'Generating image...';

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrCodeInputValue}`

    container.classList.add('active')
}

qrCodeBtn.addEventListener('click', () => {
    generateQR()
})