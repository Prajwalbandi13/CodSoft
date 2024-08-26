function insert(value) {
    document.getElementById("result").value += value;
}

function clearScreen() {
    document.getElementById("result").value = "";
}

function backspace() {
    var value = document.getElementById("result").value;
    document.getElementById("result").value = value.slice(0, -1);
}

function calculate() {
    try {
        document.getElementById("result").value = eval(document.getElementById("result").value);
    } catch (err) {
        document.getElementById("result").value = "Error";
    }
}
