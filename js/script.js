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

    qrCodeImg.addEventListener('load', () => {
        container.classList.add('active');
        qrCodeBtn.innerHTML = 'QR Cod createde';
        qrCodeInput.value = '';
        qrCodeInput.placeholder = 'Insert new text or URL';
    });



}

qrCodeBtn.addEventListener('click', () => {
    generateQR();
})


qrCodeInput.addEventListener('keydown', (e) => {
    if(e.code === "Enter"){
        generateQR();
    }
})