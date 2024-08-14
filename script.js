// Función para encriptar texto
function encryptText() {
    let text = document.getElementById("inputText").value;
    let encryptedText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("outputText").value = encryptedText;
}

// Función para desencriptar texto
function decryptText() {
    let text = document.getElementById("inputText").value;
    let decryptedText = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("outputText").value = decryptedText;
}

// Función para copiar el texto al portapapeles
function copyText() {
    let text = document.getElementById("outputText");
    text.select();
    text.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}
