const inputBox = document.querySelector('.input-box');
const listContainer = document.querySelector('.list-container');

function addBtn(){

    if(inputBox.value == ''){
        alert("Enter the input correctly");
    }
    else{

        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML='\u00d7';
        li.appendChild(span);

    }
    inputBox.value='';

}

listContainer.addEventListener('click',function(e){
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle('checked');
    } else if (e.target.tagName == 'SPAN'){
        e.target.parentElement.remove();
    }
},false);


function saveData(){
    localStorage.setItem("Data",listContainer.innerHTML);
}

function displayData(){
    listContainer.innerHTML = localStorage.getItem('Data');
}
displayData();