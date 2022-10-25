const container = document.querySelector(".container");
const generateBtn = document.querySelector(".form button");
const qrInput = document.querySelector(".form input");
const qrImg = document.querySelector(".qr-code img");

generateBtn.addEventListener("click", ()=>{
        let qrValue = qrInput.value; 
        if(!qrValue) return; // if input bar is empty return here
        generateBtn.innerText = "Generating QR Code..."
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;


        // when fetching file
        qrImg.addEventListener("load", () =>{ 
            container.classList.add("active");
            generateBtn.innerText = "Generate QR Code";

        });
    });

    // removing active class once the input field is empty
    qrInput.addEventListener("keyup", ()=> {
        if(!qrInput.value){
        container.classList.remove("active");
        }
    })
    