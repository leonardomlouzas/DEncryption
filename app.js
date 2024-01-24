function encrypt() {
    let text = document.getElementById("text-before").value;

    text = text.replace(/e/g, "enter");
    text = text.replace(/i/g, "imes");
    text = text.replace(/a/g, "ai");
    text = text.replace(/o/g, "ober");
    text = text.replace(/u/g, "ufat");

    document.getElementById("text-after").value = text;

    buttonAction("button-encrypt");
}

function decrypt() {
    let text = document.getElementById("text-before").value;
    text = text.replace(/ufat/g, "u");
    text = text.replace(/ober/g, "o");
    text = text.replace(/ai/g, "a");
    text = text.replace(/imes/g, "i");
    text = text.replace(/enter/g, "e");

    document.getElementById("text-after").value = text;

    buttonAction("button-decrypt");
}

function copyText() {
    const text = document.getElementById("text-after").value;
    navigator.clipboard.writeText(text);
    buttonAction("button-copy");
}

function buttonAction(id) {
    const button = document.getElementById(id);
    const originalColor = button.style.backgroundColor;
    const orignalText = button.innerHTML;
    button.disabled = true;

    button.innerHTML = "Done!";
    button.style.backgroundColor = "#28ff68";
    setTimeout(() => {
        button.innerHTML = orignalText;
        button.style.backgroundColor = originalColor;
        button.disabled = false;
    }, 1000);
}