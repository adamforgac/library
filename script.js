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
    bookForm.style.top = "-200%"; 
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
const bookCardArea = document.querySelector(".book-card-area");
let bookCompleted;

checkbox.addEventListener("click", function() {
    if(checkbox.checked) {
        document.querySelector(".text-pole4 input").value = document.querySelector(".text-pole3 input").value
    } 

    if(document.querySelector(".text-pole4 input").value === "") {
        labelCompleted.style.top = labelPercentageNormal;
        returnColor(labelCompleted);
    }
})

document.addEventListener("mousemove", function() {
    if(document.querySelector(".text-pole4 input").value != document.querySelector(".text-pole3 input").value) {
        checkbox.checked = false;
    }

    if(document.querySelector(".text-pole4 input").value === document.querySelector(".text-pole3 input").value && (document.querySelector(".text-pole4 input").value != "" || document.querySelector(".text-pole3 input").value) != "") {
        checkbox.checked = true;
    }
})

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

        let totalDisplay = Number(document.querySelector(".stat-only-total-pages").textContent);
        let totalForm = Number(document.querySelector(".text-pole3 input").value);
        let totalValue = totalDisplay + totalForm;
        document.querySelector(".stat-only-total-pages").textContent = totalValue;

        let completedDisplay = Number(document.querySelector(".stat-only-completed-pages").textContent);
        let completedForm = Number(document.querySelector(".text-pole4 input").value);
        let completedValue = completedDisplay + completedForm;
        document.querySelector(".stat-only-completed-pages").textContent = completedValue;

        const totalBooksStat = Number(document.querySelector(".stat-only-total-books").textContent)
        const totalBooksStatPlus = totalBooksStat + 1;
        document.querySelector(".stat-only-total-books").textContent = totalBooksStatPlus;



        removeForm();
    }
})

function removeForm() {
    bookForm.style.top = "-200%"; 

    allInputs.forEach((input) => {
        input.value = "";
    })

    allLabels.forEach((label) => {
        returnColor(label);
        label.style.top = labelPercentageNormal;
    })

    checkbox.checked = false;
}


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
}


// REMOVE BUTTON


// PROBLEM START
// PROBLEM START
// PROBLEM START
// PROBLEM START
// PROBLEM START


const wholeDoc = document.addEventListener("click", function(e) {
    if(e.target.className === "remove" || e.target.className === "fa-solid fa-trash") {
        const targeted = e.target;
        removeCard(targeted);
    } else if(e.target.className === "edit" || e.target.className === "fa-solid fa-pen-to-square") {
        const targetedEdit = e.target;
        editCard(targetedEdit);
    }
})

function editCard(value) {
    const cardNumber = value.getAttribute("data-card");  
    const allBookCards = document.querySelectorAll(".book-card");

    allBookCards.forEach(book => { 
        if(book.getAttribute("data-card") == cardNumber) {
            const bookFormEdit = document.querySelector(".book-form-edit");
            bookFormEdit.style.top = "0%";
            const allInputsEdit = document.querySelectorAll(".pole-edit input");

            
            // SAME VALUES
            // SAME VALUES
            // SAME VALUES


            const bookName = book.querySelector(".book-card-name-detail");
            const bookAuthor = book.querySelector(".book-card-author-detail")
            const completedPages = book.querySelector(".book-card-stat-read");
            const totalPages = book.querySelector(".book-card-stat-total");

            const formBookName = bookFormEdit.querySelector(".text-pole1-edit input");
            const formBookAuthor = bookFormEdit.querySelector(".text-pole2-edit input");
            const formBookTotal = bookFormEdit.querySelector(".text-pole3-edit input");
            const formBookCompleted = bookFormEdit.querySelector(".text-pole4-edit input");

            formBookName.value = bookName.textContent;
            formBookAuthor.value = bookAuthor.textContent;
            formBookCompleted.value = completedPages.textContent;
            formBookTotal.value = totalPages.textContent;

            // FORM ANIMATIONS
            // FORM ANIMATIONS
            // FORM ANIMATIONS

            const labelPercentageFocusEdit = "-20%";
            const labelPercentageNormalEdit = "32%";
            const cancelButtonEdit = document.querySelector(".book-form-cancel-edit button");
            const inputTitleEdit = document.querySelector(".text-pole1-edit input");
            const labelTitleEdit = document.querySelector(".text-pole1-edit label");
            const inputAuthorEdit = document.querySelector(".text-pole2-edit input");
            const labelAuthorEdit = document.querySelector(".text-pole2-edit label");
            const inputTotalEdit = document.querySelector(".text-pole3-edit input");
            const labelTotalEdit = document.querySelector(".text-pole3-edit label");
            const inputCompletedEdit = document.querySelector(".text-pole4-edit input");
            const labelCompletedEdit = document.querySelector(".text-pole4-edit label");
            const submitButtonEdit = document.querySelector(".book-form-confirm-edit button");
            const checkboxEdit = document.querySelector(".text-pole5-edit input");

            // CANCEL BUTTON
            // CANCEL BUTTON
            // CANCEL BUTTON

            cancelButtonEdit.addEventListener("click", function() {
                bookFormEdit.style.top = "-200%"; 
                allInputs.forEach((input) => {
                    input.value = "";
                })
            
                allLabels.forEach((label) => {
                    returnColor(label);
                    label.style.top = labelPercentageNormal;
                })
            
                checkbox.checked = false;
            })

            if(inputTitleEdit.value !== "") {
                labelTitleEdit.style.top = labelPercentageFocusEdit;
                colorChange(labelTitleEdit); 
            }  

            if(inputAuthorEdit.value !== "") {
                labelAuthorEdit.style.top = labelPercentageFocusEdit;
                colorChange(labelAuthorEdit); 
            }  

            if(inputTotalEdit.value !== "") {
                labelTotalEdit.style.top = labelPercentageFocusEdit;
                colorChange(labelTotalEdit); 
            }  

            if(inputCompletedEdit.value !== "") {
                labelCompletedEdit.style.top = labelPercentageFocusEdit;
                colorChange(labelCompletedEdit); 
            }
           

            inputTitleEdit.addEventListener("focus", function() {
                labelTitleEdit.style.top = labelPercentageFocusEdit;
                colorChange(labelTitleEdit); 
            })
            
            inputTitleEdit.addEventListener("blur", function() {
                if(inputTitleEdit.value !== "") {
                    labelTitleEdit.style.top = labelPercentageFocusEdit;
                    colorChange(labelTitleEdit);
                } else if(inputTitleEdit.value === "") {
                    labelTitleEdit.style.top = labelPercentageNormalEdit;
                    returnColor(labelTitleEdit);
                }
            })

            inputAuthorEdit.addEventListener("focus", function() {
                labelAuthorEdit.style.top = labelPercentageFocusEdit;
                colorChange(labelAuthorEdit);
            })
            
            inputAuthorEdit.addEventListener("blur", function() {
                if(inputAuthorEdit.value !== "") {
                    labelAuthorEdit.style.top = labelPercentageFocusEdit;
                    colorChange(labelAuthorEdit);
                } else if(inputAuthorEdit.value === "") {
                    labelAuthorEdit.style.top = labelPercentageNormalEdit;
                    returnColor(labelAuthorEdit);
                }
            })


            inputTotalEdit.addEventListener("focus", function() {
                labelTotalEdit.style.top = labelPercentageFocusEdit;
                colorChange(labelTotalEdit);
            })
            
            inputTotalEdit.addEventListener("blur", function() {
                if(inputTotalEdit.value !== "") {
                    labelTotalEdit.style.top = labelPercentageFocusEdit;
                    colorChange(labelTotalEdit);
                } else if(inputTotalEdit.value === "") {
                    labelTotalEdit.style.top = labelPercentageNormalEdit;
                    returnColor(labelTotalEdit);
                }
            })

            inputCompletedEdit.addEventListener("focus", function() {
                labelCompletedEdit.style.top = labelPercentageFocusEdit;
                colorChange(labelCompletedEdit);
            })
            
            inputCompletedEdit.addEventListener("blur", function() {
                if(inputCompletedEdit.value !== "") {
                    labelCompletedEdit.style.top = labelPercentageFocusEdit;
                    colorChange(labelCompletedEdit);
                } else if(inputCompletedEdit.value === "") {
                    labelCompletedEdit.style.top = labelPercentageNormalEdit;
                    returnColor(labelCompletedEdit);
                }
            })

            // CHECKBOX

            checkboxEdit.addEventListener("click", function() {
                if(checkboxEdit.checked) {
                    document.querySelector(".text-pole4-edit input").value = document.querySelector(".text-pole3-edit input").value
                } 
            
                if(document.querySelector(".text-pole4-edit input").value === "") {
                    labelCompletedEdit.style.top = labelPercentageNormalEdit;
                    returnColor(labelCompletedEdit);
                }
            })
            
            document.addEventListener("mousemove", function() {
                if(document.querySelector(".text-pole4-edit input").value != document.querySelector(".text-pole3-edit input").value) {
                    checkboxEdit.checked = false;
                }
            
                if(document.querySelector(".text-pole4-edit input").value === document.querySelector(".text-pole3-edit input").value && (document.querySelector(".text-pole4-edit input").value != "" || document.querySelector(".text-pole3-edit input").value) != "") {
                    checkbox.checked = true;
                }
            })

            // SUBMIT BUTTON
            // SUBMIT BUTTON
            // SUBMIT BUTTON

            submitButtonEdit.addEventListener("click", function(event) {
                event.preventDefault()
                allInputsEdit.forEach((input) => {
                    input.checkValidity();
                    input.reportValidity();
                })

                bookName.textContent = inputTitleEdit.value;
                bookAuthor.textContent = inputAuthorEdit.value;
                totalPages.textContent = inputTotalEdit.value;
                completedPages.textContent = inputCompletedEdit.value;    
                
                myLibrary[cardNumber].title = inputTitleEdit.value;
                myLibrary[cardNumber].author = inputAuthorEdit.value;
                myLibrary[cardNumber].completedPages = inputCompletedEdit.value;
                myLibrary[cardNumber].totalPages = inputTotalEdit.value;

                console.log("Problem");
        
                removeFormEdit();
            })

            function removeFormEdit() {
                bookFormEdit.style.top = "-200%"; 
                checkboxEdit.checked = false;
            }

            
        }
    })

   

}


// PROBLEM END
// PROBLEM END
// PROBLEM END
// PROBLEM END
// PROBLEM END



function removeCard(element) {
    const dataNum = element.getAttribute("data-card");
    const allBookCards = document.querySelectorAll(".book-card");
    allBookCards.forEach(card => {
        if(card.getAttribute("data-card") === dataNum) {

            let currentTotal = card.querySelector(".book-card-stats");

            // REMOVES BOOK TOTAL PAGES FROM STATS

            let currentTotalValue = Number(currentTotal.querySelector(".book-card-stat-total").textContent);  //current card total
            let totalForm = Number(document.querySelector(".stat-only-total-pages").textContent); //current total stats
            document.querySelector(".stat-only-total-pages").textContent = totalForm - currentTotalValue;

            // REMOVES BOOK TOTAL PAGES FROM STATS

            let currentCompletedValue = Number(currentTotal.querySelector(".book-card-stat-read").textContent);  //current card completed
            let completedForm = Number(document.querySelector(".stat-only-completed-pages").textContent); //current completed stats
            document.querySelector(".stat-only-completed-pages").textContent = completedForm - currentCompletedValue;


            // REMOVES BOOK TOTAL PAGES FROM STATS


            const totalBooksStat = Number(document.querySelector(".stat-only-total-books").textContent)
            const totalBooksStatPlus = totalBooksStat - 1;
            document.querySelector(".stat-only-total-books").textContent = totalBooksStatPlus;

            card.remove();
        }
    })
    myLibrary.splice(dataNum, 1);
}





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


// MENU FOR MOBILE DEVICES


const menu = document.querySelector(".menu");
const rightIcon = document.querySelector(".right");
const leftIcon = document.querySelector(".left");

rightIcon.addEventListener("click", function() {
    menu.classList.add("mobile");
    rightIcon.style.display = "none";
    leftIcon.style.display = "unset";
})

leftIcon.addEventListener("click", function() {
    menu.classList.remove("mobile");
    rightIcon.style.display = "unset";
    leftIcon.style.display = "none";
})






