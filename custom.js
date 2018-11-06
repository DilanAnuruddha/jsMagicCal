function createCal() {

    var numInput = document.createElement("input");
    numInput.type="Text";
    numInput.className="display";
    //numInput.setAttribute("type", "text");
    var divUI = document.getElementById("UI");
    divUI.appendChild(numInput);

    var table = document.createElement("table");
    var symbols = ["C", "/", "X", "<--", "7", "8", "9", "-", "4", "5", "6", "+", "1", "2", "3", "=", "0", "0", ".", "="];
    for (var i = 20; i > 0; i--) {
        if (i % 4 == 0) {
            var row = table.insertRow(i % 4);
            var cell = row.insertCell(0);
        } else {
            var cell = row.insertCell(0);
        }

        var button = document.createElement("button");
        button.type = "button";
        button.innerHTML = symbols[i - 1];
        button.id=symbols[i-1];
        button.setAttribute("onclick","calProcess()");
        if (i == 18) {
            cell.colSpan = 2;
            i--;
            button.className = "hMerge";
        }
        if (i == 16) {
            cell.rowSpan = 2;
            button.className="vMerge"
        }
        cell.appendChild(button);
        if (i == 20) {
            row.deleteCell(0);
        }

    }
    divUI.appendChild(table);
}

function calProcess(input){
alert("djhfkjdhf");
}