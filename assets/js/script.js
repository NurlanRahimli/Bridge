





function Parametr(minutes) {
    let hour = Math.floor(minutes/60)
    minutes = (minutes%60)
    return `${hour} ${minutes}`;
}

console.log(Parametr(130));



// var btn_add = document.getElementById("btn_add");

// btn_add.onclick = function () {
//     var value = document.getElementById("input").value;
//     var h3 = document.createElement("h3");
//     var icon = document.createElement("i");
//     var div = document.createElement("div");
    
//     div.setAttribute("class", "box")
//     icon.setAttribute("class", "fa-solid fa-trash-can")


//     h3.innerHTML = value;
//     var todo = document.getElementById("todos");
//     todo.appendChild(div);
//     div.appendChild(h3);
//     div.appendChild(icon);


//     icon.onclick = function () {
    
//         div.remove() 
//     }

    
// }






