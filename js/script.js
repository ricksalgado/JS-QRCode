const container = document.querySelector('.container');
const qrCodeBtn = document.querySelector('#qr-form button');

const qrCodeInput = document.querySelector('#qr-form input')

// Eventos
function generateQR(){

    const qrCodeInputValue = qrCodeInput.value

    console.log(qrCodeInputValue);

}

qrCodeBtn.addEventListener('click', () => {
    generateQR()
})