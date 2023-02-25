// input label animations

const inputTitle = document.querySelector(".text-pole1 input");
const labelTitle = document.querySelector(".text-pole1 label");
const labelPercentageFocus = "-20%"
const labelPercentageNormal = "32%"


inputTitle.addEventListener("focus", function() {
    labelTitle.style.top = labelPercentageFocus;
    colorChange(labelTitle); 
})

inputTitle.addEventListener("blur", function() {
    if(inputTitle.value !== "") {
        labelTitle.style.top = labelPercentageFocus;
        colorChange(labelTitle);
    } else if(inputTitle.value === "") {
        labelTitle.style.top = labelPercentageNormal;
        returnColor(labelTitle);
    }
})


const inputAuthor = document.querySelector(".text-pole2 input");
const labelAuthor = document.querySelector(".text-pole2 label");


inputAuthor.addEventListener("focus", function() {
    labelAuthor.style.top = labelPercentageFocus;
    colorChange(labelAuthor);
})

inputAuthor.addEventListener("blur", function() {
    if(inputAuthor.value !== "") {
        labelAuthor.style.top = labelPercentageFocus;
        colorChange(labelAuthor);
    } else if(inputAuthor.value === "") {
        labelAuthor.style.top = labelPercentageNormal;
        returnColor(labelAuthor);
    }
})


const inputTotal = document.querySelector(".text-pole3 input");
const labelTotal = document.querySelector(".text-pole3 label");


inputTotal.addEventListener("focus", function() {
    labelTotal.style.top = labelPercentageFocus;
    colorChange(labelTotal);

})

inputTotal.addEventListener("blur", function() {
    if(inputTotal.value !== "") {
        labelTotal.style.top = labelPercentageFocus;
        colorChange(labelTotal);
    } else if(inputTotal.value === "") {
        labelTotal.style.top = labelPercentageNormal;
        returnColor(labelTotal);
    }
})


const inputCompleted = document.querySelector(".text-pole4 input");
const labelCompleted = document.querySelector(".text-pole4 label");


inputCompleted.addEventListener("focus", function() {
    labelCompleted.style.top = labelPercentageFocus;
    colorChange(labelCompleted);
})

inputCompleted.addEventListener("blur", function() {
    if(inputCompleted.value !== "") {
        labelCompleted.style.top = labelPercentageFocus;
        colorChange(labelCompleted);
    } else if(inputCompleted.value === "") {
        labelCompleted.style.top = labelPercentageNormal;
        returnColor(labelCompleted);
    }
})


function colorChange(element) {
    element.style.color = "#0090FB"
}

function returnColor(element) {
    element.style.color = "black"
}


// SHOW AND HIDE FORM


const cancelButton = document.querySelector(".book-form-cancel button");
const bookForm = document.querySelector(".book-form");
const addNewBook = document.querySelector(".add-new-book");
console.log(addNewBook)

cancelButton.addEventListener("click", function() {
    bookForm.style.top = "-150%"; 
})

addNewBook.addEventListener("click", function() {
    bookForm.style.top = "0%"; 
})


// LIBRARY SYSTEM



















