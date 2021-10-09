function checkwin(){
    // Check rows
    for (let i = 0; i < 3; i ++){
        first = document.getElementById(`${i}-0`).innerHTML
        over = 0;
        if (first != ""){
            for (let j = 1; j < 3; j++){
                cell = document.getElementById(`${i}-${j}`).innerHTML;
                if (cell != first) {
                    over = 1;
                    break ;
                }
            }
            if (over == 0){
                document.getElementById("winner").innerHTML = document.getElementById("marker").innerHTML + " wins";
                return 0;
            }
        }
    }
    // Check columns
    for (let i = 0; i < 3; i ++){
        first = document.getElementById(`0-${i}`).innerHTML
        over = 0;
        if (first != ""){
            for (let j = 1; j < 3; j++){
                cell = document.getElementById(`${j}-${i}`).innerHTML;
                if (cell != first) {
                    over = 1;
                    break ;
                }
            }
            if (over == 0){
                document.getElementById("winner").innerHTML = document.getElementById("marker").innerHTML + " wins";
                return 0;
            }
        }
    }
    // Check diagonals
    // First Diagonal
    first = document.getElementById(`0-0`).innerHTML
    second = document.getElementById(`1-1`).innerHTML
    third = document.getElementById(`2-2`).innerHTML
    if (first != "" & first == second & second == third){
        document.getElementById("winner").innerHTML = document.getElementById("marker").innerHTML + " wins";
        return 0;
    }

    // Second Diagonal
    first = document.getElementById(`0-2`).innerHTML
    second = document.getElementById(`1-1`).innerHTML
    third = document.getElementById(`2-0`).innerHTML
    if (first != "" & first == second & second == third){
        document.getElementById("winner").innerHTML = document.getElementById("marker").innerHTML + " wins";
        return 0;
    }


    // Check Tie
    check = 0;
    for (let i = 0; i < 3; i ++){
        for (let j = 0; j < 3; j++){
            cell = document.getElementById(`${j}-${i}`).innerHTML;
            if (cell == ""){ return 0;}
        }
    }
    document.getElementById("winner").innerHTML = "Tie";
}


function change(el){
    // Get current turn
    m = document.getElementById("marker");
    winner = document.getElementById("winner").innerHTML;
    if (el.innerHTML == "" & winner == ""){
        // If X turn
        if (m.innerHTML == "X"){
            mark = "O";
            add = "X";
        }
        // If O turn
        else if (m.innerHTML == "O"){
            mark = "X";
            add = "O";
        }
        // Update turn
        el.innerHTML = add;
        checkwin();
        m.innerHTML = mark;
        
    }
    if (document.getElementById("winner").innerHTML != ""){
        document.getElementById("restart").hidden = false;
    }

}


function restart(){
    for (let i = 0; i < 3; i ++){
        for (let j = 0; j < 3; j++){
            document.getElementById(`${i}-${j}`).innerHTML = "";
        }
    }
    document.getElementById("winner").innerHTML = "";
    document.getElementById("marker").innerHTML = "X";
    document.getElementById("restart").hidden = true;
}


function create(){
    d = document.getElementById("table");
    code = "";
    // Create rows
    for (let i = 0; i < 3; i++){
        // Create columns
        code += "<tr>"
        for (let j = 0; j < 3; j++){
            // Create cell
            code += `<td id="${i}-${j}" onClick="change(this)"></td>`
        }
        code += "</tr>"
    }
    d.innerHTML = code;
}
create();