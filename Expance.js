function handel(event){
    event.preventDefault();

    // storing in local storage
    const amount = event.target.amount.value;
    const descp = event.target.descp.value;
    const option = event.target.option.value;

    var Expence = {
        amount:amount,
        descp:descp,
        option:option
    }
    localStorage.setItem(`${Expence.option}`, JSON.stringify(Expence))

    // showing in New Li
    const storage = document.querySelector(".storage");
    const newLi = document.createElement("li");
    newLi.innerHTML= (`${Expence.amount} - ${Expence.descp} - ${Expence.option}`);
    newLi.className = "list";
    storage.appendChild(newLi);

    // creating Edit button and adding functionality to it

    const editbutton = document.createElement("button");
    editbutton.innerHTML = "Edit Expence";
    editbutton.className = "edit"
    newLi.appendChild(editbutton);

    editbutton.onclick = function(){
        localStorage.removeItem(Expence.option)
        newLi.remove();
        document.getElementById("amount").value = amount;
        document.getElementById("descp").value = descp;
        document.getElementById("option").value = option;
        

    }

    // creating delete button and its functionality

    const deletebutton = document.createElement("button");
    deletebutton.innerHTML = "Delete Expence";
    deletebutton.className = "delete";
    newLi.appendChild(deletebutton)

    deletebutton.onclick = function(){
        localStorage.removeItem(Expence.option)
        newLi.remove();
    }


    inputReset()
}
function inputReset(){
    document.getElementById("amount").value = "";
    document.getElementById("descp").value = "";
    document.getElementById("option").value = "";
}