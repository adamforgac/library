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
const confirmButton = document.querySelector(".book-form-confirm");

cancelButton.addEventListener("click", function() {
    bookForm.style.top = "-150%"; 
    allInputs.forEach((input) => {
        input.value = "";
    })

    allLabels.forEach((label) => {
        returnColor(label);
        label.style.top = labelPercentageNormal;
    })

    checkbox.checked = false;
})

addNewBook.addEventListener("click", function() {
    bookForm.style.top = "0%";
})


// LIBRARY SYSTEM


let myLibrary = [];

const library = document.querySelector(".library");
const submitButton = document.querySelector(".book-form-confirm button");
const allInputs = document.querySelectorAll(".pole input");
const allLabels = document.querySelectorAll(".pole label");
const checkbox = document.querySelector(".text-pole5 input");
const bookCardArea = document.querySelector(".book-card-area")
let bookCompleted;

submitButton.addEventListener("click", function(event) {
    event.preventDefault()
    allInputs.forEach((input) => {
        input.checkValidity();
        input.reportValidity();
    })

    if(checkbox.checked) {
        bookCompleted = true;
    } else {
        bookCompleted = false;
    }

    if(inputTitle.value === "" || inputAuthor.value === "" || inputTotal.value === "" || inputCompleted.value === "") {
        false;
    } else {
        addToLibrary(inputTitle.value, inputAuthor.value, inputTotal.value, inputCompleted.value, bookCompleted);
    }

    bookForm.style.top = "-150%"; 

    allInputs.forEach((input) => {
        input.value = "";
    })

    allLabels.forEach((label) => {
        returnColor(label);
        label.style.top = labelPercentageNormal;
    })

    checkbox.checked = false;
})


function Book(title, author, totalPages, completedPages, bookDone) {
    this.title = title;
    this.author = author;
    this.totalPages = totalPages;
    this.completedPages = completedPages;
    this.bookDone = bookDone;
}


function addToLibrary(title, author, totalPages, completedPages, bookDone) {
    myLibrary.push(new Book(title, author, totalPages, completedPages, bookDone))

    loopThroughtArray(myLibrary.length);
    console.log(myLibrary)
}


// REMOVE BUTTON

const wholeDoc = document.addEventListener("click", function(e) {
    if(e.target.className === "remove" || e.target.className === "fa-solid fa-trash") {
        const targeted = e.target;
        removeCard(targeted);
    }

    
})


function removeCard(element) {
    const dataNum = element.getAttribute("data-card");
    const allBookCards = document.querySelectorAll(".book-card");
    allBookCards.forEach(card => {
        if(card.getAttribute("data-card") === dataNum) {
            card.remove();
        }
    })
    myLibrary.splice(dataNum, 1);
    console.log(myLibrary)
}


// TEST CODE 

const divElement = document.createElement("div");
const buttonElement = document.createElement("button");
const iconElement = document.createElement("i");
const paragraphElement = document.createElement("p");
const headingElement = document.createElement("h2");


function loopThroughtArray(num) {

    for(let i = num-1; i <= myLibrary.length-1; i++) {

        // CREATE BOOK CARD

        const mainDiv = library.appendChild(document.createElement("div"));
        mainDiv.classList.add("book-card");
        mainDiv.appendChild(document.createElement("div")).classList.add("book-card-edit-buttons");
        mainDiv.appendChild(document.createElement("div")).classList.add("book-card-name");
        mainDiv.appendChild(document.createElement("div")).classList.add("book-card-author");
        mainDiv.appendChild(document.createElement("div")).classList.add("book-card-buttons");
        mainDiv.appendChild(document.createElement("div")).classList.add("book-card-stats");


        // CREATE EDIT BUTTONS


        const currentEditButtons = mainDiv.querySelector(".book-card-edit-buttons");
        currentEditButtons.appendChild(document.createElement("button")).classList.add("edit");
        currentEditButtons.appendChild(document.createElement("button")).classList.add("remove");
        const editButton = currentEditButtons.querySelector(".edit");
        const removeButton = currentEditButtons.querySelector(".remove");
        editButton.appendChild(document.createElement("i")).classList.add("fa-solid", "fa-pen-to-square");
        removeButton.appendChild(document.createElement("i")).classList.add("fa-solid", "fa-trash");    
        
        
        // CREATE NAME OF THE BOOK

        
        const bookName = mainDiv.querySelector(".book-card-name");
        bookName.appendChild(document.createElement("h2")).classList.add("book-card-name-detail", "text");
        const bookNameHeading = bookName.querySelector(".book-card-name-detail");
        bookNameHeading.textContent = myLibrary[i].title;


        // CREATE AUTHOR OF THE BOOK


        const bookAuthor = mainDiv.querySelector(".book-card-author");
        bookAuthor.appendChild(document.createElement("p")).classList.add("book-card-author-detail", "text");
        const bookAuthorHeading = bookAuthor.querySelector(".book-card-author-detail");
        bookAuthorHeading.textContent = myLibrary[i].author;


        // CREATE NAME OF THE BOOK


        const currentButtons = mainDiv.querySelector(".book-card-buttons");
        currentButtons.appendChild(document.createElement("button")).classList.add("minus");
        currentButtons.appendChild(document.createElement("button")).classList.add("tick");
        currentButtons.appendChild(document.createElement("button")).classList.add("plus");
        const minusButton = currentButtons.querySelector(".minus");
        const tickButton = currentButtons.querySelector(".tick");
        const plusButton = currentButtons.querySelector(".plus");
        minusButton.appendChild(document.createElement("i")).classList.add("fa-solid", "fa-minus");
        tickButton.appendChild(document.createElement("i")).classList.add("fa-solid", "fa-check");  
        plusButton.appendChild(document.createElement("i")).classList.add("fa-solid", "fa-plus");  


        // CREATE BOOK STATS


        const bookStats = mainDiv.querySelector(".book-card-stats");
        bookStats.appendChild(document.createElement("p")).classList.add("book-card-stat-read");
        bookStats.appendChild(document.createElement("p")).classList.add("info-icon");
        bookStats.appendChild(document.createElement("p")).classList.add("book-card-stat-total");
        const infoIcon = bookStats.querySelector(".info-icon");
        infoIcon.appendChild(document.createElement("i")).classList.add("fa-solid", "fa-book-open");
        const bookRead = bookStats.querySelector(".book-card-stat-read");
        bookRead.textContent = myLibrary[i].completedPages;
        const bookTotal = bookStats.querySelector(".book-card-stat-total");
        bookTotal.textContent = myLibrary[i].totalPages;

        addAttribute()

    }

    // ADDS DATA ATTRIBUTES TO ALL ELEMENTS IN BOOK-CARD AND TO BOOK-CARD

    function addAttribute() {
        const allBookCards = library.querySelectorAll(".book-card");
    

        for(let i = 0; i <= allBookCards.length-1; i++) {
            allBookCards[i].setAttribute("data-card", [i]);
            const allBookCardsChildren = allBookCards[i].querySelectorAll(".book-card div, .book-card button, .book-card p, .book-card i, .book-card h2")
    
            allBookCardsChildren.forEach(child => {
                child.setAttribute("data-card", [i]);
            })
        }
    }
}






