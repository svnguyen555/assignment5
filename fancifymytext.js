function showAlert() {
    alert("Hello, world!");
}

function makeTextBigger() {
    document.getElementById("textInput").style.fontSize = "24pt";
}

function fancyStyle() {
    alert("FancyShmancy selected!");
    document.getElementById("textInput").style.fontWeight= "bold";
    document.getElementById("textInput").style.color= "blue";
    document.getElementById("textInput").style.textDecoration= "underline";
}

function boringStyle() {
    alert("BoringBetty selected!");
    document.getElementById("textInput").style.fontWeight= "normal";
    document.getElementById("textInput").style.color= "black";
}

function moo(){
    var textArea = document.getElementById("textInput");
    var str = textArea.value;
    str = str.toUpperCase();

    var parts = str.split(".");
    str = parts.join("Moo");

    textArea.value = str;
}