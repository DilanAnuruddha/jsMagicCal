function createCal() {
    var numInput = document.createElement("input");
    numInput.setAttribute("type", "text");
    var divUI = document.getElementById("UI");
    divUI.appendChild(numInput);

    var table = document.createElement("table");
    for (var i = 0; i < 20; i++) {
    
        if(i%4==0){
            var row=table.insertRow(i%4);
            var cell=row.insertCell(0);
        }else{
            var cell=row.insertCell(i%4);
        }
       
       

       var button=document.createElement("button");
       button.type="button";
       button.innerHTML=i;
       cell.appendChild(button);

    }
    divUI.appendChild(table);
}