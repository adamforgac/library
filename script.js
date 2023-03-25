// input label animations

const inputTitle = document.querySelector('.text-pole1 input');
const labelTitle = document.querySelector('.text-pole1 label');
const labelPercentageFocus = '-20%';
const labelPercentageNormal = '32%';

inputTitle.addEventListener('focus', () => {
  labelTitle.style.top = labelPercentageFocus;
  colorChange(labelTitle);
});

inputTitle.addEventListener('blur', () => {
  if (inputTitle.value !== '') {
    labelTitle.style.top = labelPercentageFocus;
    colorChange(labelTitle);
  } else if (inputTitle.value === '') {
    labelTitle.style.top = labelPercentageNormal;
    returnColor(labelTitle);
  }
});

const inputAuthor = document.querySelector('.text-pole2 input');
const labelAuthor = document.querySelector('.text-pole2 label');

inputAuthor.addEventListener('focus', () => {
  labelAuthor.style.top = labelPercentageFocus;
  colorChange(labelAuthor);
});

inputAuthor.addEventListener('blur', () => {
  if (inputAuthor.value !== '') {
    labelAuthor.style.top = labelPercentageFocus;
    colorChange(labelAuthor);
  } else if (inputAuthor.value === '') {
    labelAuthor.style.top = labelPercentageNormal;
    returnColor(labelAuthor);
  }
});

const inputTotal = document.querySelector('.text-pole3 input');
const labelTotal = document.querySelector('.text-pole3 label');

inputTotal.addEventListener('focus', () => {
  labelTotal.style.top = labelPercentageFocus;
  colorChange(labelTotal);

  inputTotal.addEventListener('keypress', (evt) => {
    if (
      (evt.which != 8 && evt.which != 0 && evt.which < 48) ||
      evt.which > 57
    ) {
      evt.preventDefault();
    }
  });
});

inputTotal.addEventListener('blur', () => {
  if (inputTotal.value !== '') {
    labelTotal.style.top = labelPercentageFocus;
    colorChange(labelTotal);
  } else if (inputTotal.value === '') {
    labelTotal.style.top = labelPercentageNormal;
    returnColor(labelTotal);
  }
});

const inputCompleted = document.querySelector('.text-pole4 input');
const labelCompleted = document.querySelector('.text-pole4 label');

inputCompleted.addEventListener('focus', () => {
  labelCompleted.style.top = labelPercentageFocus;
  colorChange(labelCompleted);

  inputCompleted.addEventListener('keypress', (evt) => {
    if (
      (evt.which != 8 && evt.which != 0 && evt.which < 48) ||
      evt.which > 57
    ) {
      evt.preventDefault();
    }
  });
});

inputCompleted.addEventListener('blur', () => {
  if (inputCompleted.value !== '') {
    labelCompleted.style.top = labelPercentageFocus;
    colorChange(labelCompleted);
  } else if (inputCompleted.value === '') {
    labelCompleted.style.top = labelPercentageNormal;
    returnColor(labelCompleted);
  }
});

function colorChange(element) {
  element.style.color = '#0090FB';
}

function returnColor(element) {
  element.style.color = 'black';
}

// SHOW AND HIDE FORM

const cancelButton = document.querySelector('.book-form-cancel button');
const bookForm = document.querySelector('.book-form');
const addNewBook = document.querySelector('.add-new-book');
const confirmButton = document.querySelector('.book-form-confirm');

cancelButton.addEventListener('click', () => {
  bookForm.style.top = '-200%';
  allInputs.forEach((input) => {
    input.value = '';
  });

  allLabels.forEach((label) => {
    returnColor(label);
    label.style.top = labelPercentageNormal;
  });

  checkbox.checked = false;
});

addNewBook.addEventListener('click', () => {
  bookForm.style.top = '0%';
});

// LIBRARY SYSTEM

let myLibrary = [];

const library = document.querySelector('.library');
const submitButton = document.querySelector('.book-form-confirm button');
const allInputs = document.querySelectorAll('.pole input');
const allLabels = document.querySelectorAll('.pole label');
const checkbox = document.querySelector('.text-pole5 input');
const bookCardArea = document.querySelector('.book-card-area');
let bookCompleted;

checkbox.addEventListener('click', () => {
  if (checkbox.checked) {
    document.querySelector('.text-pole4 input').value =
      document.querySelector('.text-pole3 input').value;
  }

  if (document.querySelector('.text-pole3 input').value !== '') {
    labelCompleted.style.top = labelPercentageFocus;
    colorChange(labelCompleted);
  }

  if (document.querySelector('.text-pole4 input').value === '') {
    labelCompleted.style.top = labelPercentageNormal;
    returnColor(labelCompleted);
  }
});

document.addEventListener('mousemove', () => {
  if (
    document.querySelector('.text-pole4 input').value !=
    document.querySelector('.text-pole3 input').value
  ) {
    checkbox.checked = false;
  }

  if (
    document.querySelector('.text-pole4 input').value ===
      document.querySelector('.text-pole3 input').value &&
    (document.querySelector('.text-pole4 input').value != '' ||
      document.querySelector('.text-pole3 input').value) != ''
  ) {
    checkbox.checked = true;
  }
});

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  allInputs.forEach((input) => {
    input.checkValidity();
    input.reportValidity();
  });

  if (checkbox.checked) {
    bookCompleted = true;
  } else {
    bookCompleted = false;
  }

  if (
    Number(document.querySelector('.text-pole3 input').value) <
    Number(document.querySelector('.text-pole4 input').value)
  ) {
    alert('You cannot read more pages than the book has');
  } else if (Number(document.querySelector('.text-pole3 input').value) <= 0) {
    alert('The book has to have more than 0 pages.');
  } else if (Number(document.querySelector('.text-pole3 input').value > 1000)) {
    false;
  } else if (
    inputTitle.value === '' ||
    inputAuthor.value === '' ||
    inputTotal.value === '' ||
    inputCompleted.value === ''
  ) {
    false;
  } else {
    addToLibrary(
      inputTitle.value,
      inputAuthor.value,
      inputTotal.value,
      inputCompleted.value,
      bookCompleted
    );

    const totalDisplay = Number(
      document.querySelector('.stat-only-total-pages').textContent
    );
    const totalForm = Number(document.querySelector('.text-pole3 input').value);
    const totalValue = totalDisplay + totalForm;
    document.querySelector('.stat-only-total-pages').textContent = totalValue;

    const completedDisplay = Number(
      document.querySelector('.stat-only-completed-pages').textContent
    );
    const completedForm = Number(
      document.querySelector('.text-pole4 input').value
    );
    const completedValue = completedDisplay + completedForm;
    document.querySelector('.stat-only-completed-pages').textContent =
      completedValue;

    const totalBooksStat = Number(
      document.querySelector('.stat-only-total-books').textContent
    );
    const totalBooksStatPlus = totalBooksStat + 1;
    document.querySelector('.stat-only-total-books').textContent =
      totalBooksStatPlus;

    if (
      document.querySelector('.text-pole3 input').value ===
      document.querySelector('.text-pole4 input').value
    ) {
      const completedBooks = document.querySelector(
        '.stat-only-completed-books'
      ).textContent;
      const finalCompletedBooks = Number(completedBooks) + 1;
      document.querySelector('.stat-only-completed-books').textContent =
        finalCompletedBooks;
      const allBookCards = document.querySelectorAll('.book-card');

      allBookCards.forEach((card) => {
        if (
          Number(card.querySelector('.book-card-stat-read').textContent) ===
          Number(card.querySelector('.book-card-stat-total').textContent)
        ) {
          card.querySelector('.tick').style.backgroundColor = 'green';
        }
      });
    }

    removeForm();
  }
});

function removeForm() {
  bookForm.style.top = '-200%';

  allInputs.forEach((input) => {
    input.value = '';
  });

  allLabels.forEach((label) => {
    returnColor(label);
    label.style.top = labelPercentageNormal;
  });

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
  myLibrary.push(new Book(title, author, totalPages, completedPages, bookDone));

  loopThroughtArray(myLibrary.length);
}

// REMOVE BUTTON

const wholeDoc = document.addEventListener('click', (e) => {
  if (
    e.target.className === 'remove' ||
    e.target.className === 'fa-solid fa-trash'
  ) {
    const targeted = e.target;
    removeCard(targeted);
  } else if (
    e.target.className === 'edit' ||
    e.target.className === 'fa-solid fa-pen-to-square'
  ) {
    const targetedEdit = e.target;
    editCard(targetedEdit);
  } else if (
    e.target.className === 'plus' ||
    e.target.className === 'fa-solid fa-plus'
  ) {
    const plusOne = e.target;
    addOne(plusOne);
  } else if (
    e.target.className === 'minus' ||
    e.target.className === 'fa-solid fa-minus'
  ) {
    const minusOne = e.target;
    removeOne(minusOne);
  } else if (
    e.target.className === 'tick' ||
    e.target.className === 'fa-solid fa-check'
  ) {
    const tick = e.target;
    tickIt(tick);
  }
});

function tickIt(value) {
  const cardNumber = value.getAttribute('data-card');
  const allBookCards = document.querySelectorAll('.book-card');

  allBookCards.forEach((card) => {
    if (card.getAttribute('data-card') == cardNumber) {
      const readStatCard = card.querySelector(
        '.book-card-stat-read'
      ).textContent;
      const readStatNormal = document.querySelector(
        '.stat-only-completed-pages'
      ).textContent; // COMPLETED PAGES STAT
      const totalStatNormal = document.querySelector(
        '.stat-only-total-pages'
      ).textContent; // TOTAL PAGES STAT
      const totalStatCard = card.querySelector(
        '.book-card-stat-total'
      ).textContent;
      const completedBooks = document.querySelector(
        '.stat-only-completed-books'
      ).textContent; // TOTAL BOOKS STAT

      if (Number(readStatCard) < Number(totalStatCard)) {
        const final =
          Number(totalStatCard - readStatCard) + Number(readStatNormal);
        document.querySelector('.stat-only-completed-pages').textContent =
          final;
        card.querySelector('.tick').style.backgroundColor = 'green';
        card.querySelector('.book-card-stat-read').textContent =
          card.querySelector('.book-card-stat-total').textContent;
        const finalCompletedBooks = Number(completedBooks) + 1;
        document.querySelector('.stat-only-completed-books').textContent =
          finalCompletedBooks;

        myLibrary[cardNumber].completedPages = myLibrary[cardNumber].totalPages;
      } else if (Number(readStatCard) === Number(totalStatCard)) {
        false;
      }
    }
  });
}

function removeOne(value) {
  const cardNumber = value.getAttribute('data-card');
  const allBookCards = document.querySelectorAll('.book-card');

  allBookCards.forEach((card) => {
    if (card.getAttribute('data-card') == cardNumber) {
      const readStatCard = card.querySelector(
        '.book-card-stat-read'
      ).textContent;
      const readStatNormal = document.querySelector(
        '.stat-only-completed-pages'
      ).textContent; // COMPLETED PAGES STAT
      const totalStatNormal = document.querySelector(
        '.stat-only-total-pages'
      ).textContent; // TOTAL PAGES STAT
      const totalStatCard = card.querySelector(
        '.book-card-stat-total'
      ).textContent;
      const completedBooks = document.querySelector(
        '.stat-only-completed-books'
      ).textContent; // TOTAL BOOKS STAT

      if (Number(readStatCard) === Number(totalStatCard)) {
        card.querySelector('.tick').style.backgroundColor = 'white';
        const finalCardStat = Number(readStatCard) - 1;
        const finalStatNormal = Number(readStatNormal) - 1;
        const finalStatBooks = Number(completedBooks) - 1;
        card.querySelector('.book-card-stat-read').textContent = finalCardStat;
        document.querySelector('.stat-only-completed-pages').textContent =
          finalStatNormal;
        document.querySelector('.stat-only-completed-books').textContent =
          finalStatBooks;

        const data = Number(myLibrary[cardNumber].completedPages) - 1;
        myLibrary[cardNumber].completedPages = data.toString();
      } else if (Number(readStatCard) === 0) {
        false;
      } else {
        const finalCardStat = Number(readStatCard) - 1;
        const finalStatNormal = Number(readStatNormal) - 1;
        card.querySelector('.book-card-stat-read').textContent = finalCardStat;
        document.querySelector('.stat-only-completed-pages').textContent =
          finalStatNormal;

        const data = Number(myLibrary[cardNumber].completedPages) - 1;
        myLibrary[cardNumber].completedPages = data.toString();
      }
    }
  });
}

function addOne(value) {
  const cardNumber = value.getAttribute('data-card');
  const allBookCards = document.querySelectorAll('.book-card');

  allBookCards.forEach((card) => {
    if (card.getAttribute('data-card') == cardNumber) {
      const readStatCard = card.querySelector(
        '.book-card-stat-read'
      ).textContent;
      const readStatNormal = document.querySelector(
        '.stat-only-completed-pages'
      ).textContent; // COMPLETED PAGES STAT
      const totalStatNormal = document.querySelector(
        '.stat-only-total-pages'
      ).textContent; // TOTAL PAGES STAT
      const totalStatCard = card.querySelector(
        '.book-card-stat-total'
      ).textContent;
      const completedBooks = document.querySelector(
        '.stat-only-completed-books'
      ).textContent; // TOTAL BOOKS STAT

      if (Number(readStatCard) === Number(totalStatCard) - 1) {
        card.querySelector('.tick').style.backgroundColor = 'green';
        const finalCardStat = Number(readStatCard) + 1;
        const finalStatNormal = Number(readStatNormal) + 1;
        const finalStatBooks = Number(completedBooks) + 1;
        card.querySelector('.book-card-stat-read').textContent = finalCardStat;
        document.querySelector('.stat-only-completed-pages').textContent =
          finalStatNormal;
        document.querySelector('.stat-only-completed-books').textContent =
          finalStatBooks;

        myLibrary[cardNumber].completedPages = myLibrary[cardNumber].totalPages;
      } else if (Number(readStatCard) === Number(totalStatCard)) {
        false;
      } else {
        const finalCardStat = Number(readStatCard) + 1;
        const finalStatNormal = Number(readStatNormal) + 1;
        card.querySelector('.book-card-stat-read').textContent = finalCardStat;
        document.querySelector('.stat-only-completed-pages').textContent =
          finalStatNormal;

        const data = Number(myLibrary[cardNumber].completedPages) + 1;
        myLibrary[cardNumber].completedPages = data.toString();
      }
    }
  });
}

function editCard(value) {
  const cardNumber = value.getAttribute('data-card');
  const allBookCards = document.querySelectorAll('.book-card');

  allBookCards.forEach((book) => {
    if (book.getAttribute('data-card') == cardNumber) {
      const bookFormEdit = document.querySelector('.book-form-edit');
      bookFormEdit.style.top = '0%';
      const allInputsEdit = document.querySelectorAll('.pole-edit input');

      // SAME VALUES
      // SAME VALUES
      // SAME VALUES

      const bookName = book.querySelector('.book-card-name-detail');
      const bookAuthor = book.querySelector('.book-card-author-detail');
      const completedPages = book.querySelector('.book-card-stat-read');
      const totalPages = book.querySelector('.book-card-stat-total');

      const formBookName = bookFormEdit.querySelector('.text-pole1-edit input');
      const formBookAuthor = bookFormEdit.querySelector(
        '.text-pole2-edit input'
      );
      const formBookTotal = bookFormEdit.querySelector(
        '.text-pole3-edit input'
      );
      const formBookCompleted = bookFormEdit.querySelector(
        '.text-pole4-edit input'
      );

      formBookName.value = bookName.textContent;
      formBookAuthor.value = bookAuthor.textContent;
      formBookCompleted.value = completedPages.textContent;
      formBookTotal.value = totalPages.textContent;

      // FORM ANIMATIONS
      // FORM ANIMATIONS
      // FORM ANIMATIONS

      const labelPercentageFocusEdit = '-20%';
      const labelPercentageNormalEdit = '32%';
      const cancelButtonEdit = document.querySelector(
        '.book-form-cancel-edit button'
      );
      const inputTitleEdit = document.querySelector('.text-pole1-edit input');
      const labelTitleEdit = document.querySelector('.text-pole1-edit label');
      const inputAuthorEdit = document.querySelector('.text-pole2-edit input');
      const labelAuthorEdit = document.querySelector('.text-pole2-edit label');
      const inputTotalEdit = document.querySelector('.text-pole3-edit input');
      const labelTotalEdit = document.querySelector('.text-pole3-edit label');
      const inputCompletedEdit = document.querySelector(
        '.text-pole4-edit input'
      );
      const labelCompletedEdit = document.querySelector(
        '.text-pole4-edit label'
      );
      const submitButtonEdit = document.querySelector(
        '.book-form-confirm-edit button'
      );
      const checkboxEdit = document.querySelector('.text-pole5-edit input');

      // CANCEL BUTTON
      // CANCEL BUTTON
      // CANCEL BUTTON

      cancelButtonEdit.addEventListener('click', (event) => {
        bookFormEdit.style.top = '-200%';
        allInputs.forEach((input) => {
          input.value = '';
        });

        allLabels.forEach((label) => {
          returnColor(label);
          label.style.top = labelPercentageNormal;
        });

        checkbox.checked = false;
        event.stopImmediatePropagation();
      });

      if (inputTitleEdit.value !== '') {
        labelTitleEdit.style.top = labelPercentageFocusEdit;
        colorChange(labelTitleEdit);
      }

      if (inputAuthorEdit.value !== '') {
        labelAuthorEdit.style.top = labelPercentageFocusEdit;
        colorChange(labelAuthorEdit);
      }

      if (inputTotalEdit.value !== '') {
        labelTotalEdit.style.top = labelPercentageFocusEdit;
        colorChange(labelTotalEdit);
      }

      if (inputCompletedEdit.value !== '') {
        labelCompletedEdit.style.top = labelPercentageFocusEdit;
        colorChange(labelCompletedEdit);
      }

      inputTitleEdit.addEventListener('focus', () => {
        labelTitleEdit.style.top = labelPercentageFocusEdit;
        colorChange(labelTitleEdit);
      });

      inputTitleEdit.addEventListener('blur', (event) => {
        if (inputTitleEdit.value !== '') {
          labelTitleEdit.style.top = labelPercentageFocusEdit;
          colorChange(labelTitleEdit);
        } else if (inputTitleEdit.value === '') {
          labelTitleEdit.style.top = labelPercentageNormalEdit;
          returnColor(labelTitleEdit);
        }

        event.stopImmediatePropagation();
      });

      inputAuthorEdit.addEventListener('focus', (event) => {
        labelAuthorEdit.style.top = labelPercentageFocusEdit;
        colorChange(labelAuthorEdit);
        event.stopImmediatePropagation();
      });

      inputAuthorEdit.addEventListener('blur', (event) => {
        if (inputAuthorEdit.value !== '') {
          labelAuthorEdit.style.top = labelPercentageFocusEdit;
          colorChange(labelAuthorEdit);
        } else if (inputAuthorEdit.value === '') {
          labelAuthorEdit.style.top = labelPercentageNormalEdit;
          returnColor(labelAuthorEdit);
        }
        event.stopImmediatePropagation();
      });

      inputTotalEdit.addEventListener('focus', (event) => {
        labelTotalEdit.style.top = labelPercentageFocusEdit;
        colorChange(labelTotalEdit);
        event.stopImmediatePropagation();
      });

      inputTotalEdit.addEventListener('blur', (event) => {
        if (inputTotalEdit.value !== '') {
          labelTotalEdit.style.top = labelPercentageFocusEdit;
          colorChange(labelTotalEdit);
        } else if (inputTotalEdit.value === '') {
          labelTotalEdit.style.top = labelPercentageNormalEdit;
          returnColor(labelTotalEdit);
        }
        event.stopImmediatePropagation();
      });

      inputCompletedEdit.addEventListener('focus', (event) => {
        labelCompletedEdit.style.top = labelPercentageFocusEdit;
        colorChange(labelCompletedEdit);
        event.stopImmediatePropagation();
      });

      inputCompletedEdit.addEventListener('blur', (event) => {
        if (inputCompletedEdit.value !== '') {
          labelCompletedEdit.style.top = labelPercentageFocusEdit;
          colorChange(labelCompletedEdit);
        } else if (inputCompletedEdit.value === '') {
          labelCompletedEdit.style.top = labelPercentageNormalEdit;
          returnColor(labelCompletedEdit);
        }

        event.stopImmediatePropagation();
      });

      // CHECKBOX
      // CHECKBOX
      // CHECKBOX

      checkboxEdit.addEventListener('click', (event) => {
        if (checkboxEdit.checked) {
          document.querySelector('.text-pole4-edit input').value =
            document.querySelector('.text-pole3-edit input').value;
        }

        if (document.querySelector('.text-pole3-edit input').value !== '') {
          labelCompletedEdit.style.top = labelPercentageFocus;
          colorChange(labelCompletedEdit);
        }

        if (document.querySelector('.text-pole4-edit input').value === '') {
          labelCompletedEdit.style.top = labelPercentageNormalEdit;
          returnColor(labelCompletedEdit);
        }

        event.stopImmediatePropagation();
      });

      document.addEventListener('mousemove', (event) => {
        if (
          document.querySelector('.text-pole4-edit input').value !=
          document.querySelector('.text-pole3-edit input').value
        ) {
          checkboxEdit.checked = false;
        }

        if (
          document.querySelector('.text-pole4-edit input').value ===
            document.querySelector('.text-pole3-edit input').value &&
          (document.querySelector('.text-pole4-edit input').value != '' ||
            document.querySelector('.text-pole3-edit input').value) != ''
        ) {
          checkboxEdit.checked = true;
        }

        event.stopImmediatePropagation();
      });

      // SUBMIT BUTTON
      // SUBMIT BUTTON
      // SUBMIT BUTTON

      const completedOld = book.querySelector(
        '.book-card-stat-read'
      ).textContent;
      const totalOld = book.querySelector('.book-card-stat-total').textContent;

      submitButtonEdit.addEventListener('click', (event) => {
        event.stopPropagation();
        event.preventDefault();
        allInputsEdit.forEach((input) => {
          input.checkValidity();
          input.reportValidity();
        });

        if (
          Number(document.querySelector('.text-pole3-edit input').value) <
          Number(document.querySelector('.text-pole4-edit input').value)
        ) {
          alert('You cannot read more pages than the book has');
          event.stopImmediatePropagation();
        } else if (
          Number(document.querySelector('.text-pole3-edit input').value) <= 0
        ) {
          alert('The has to have more than 0 pages');
        } else if (
          Number(document.querySelector('.text-pole3-edit input').value > 1000)
        ) {
          false;
        } else {
          const currentInputTotal = Number(
            document.querySelector('.text-pole3-edit input').value
          );
          const currentInputCompleted = Number(
            document.querySelector('.text-pole4-edit input').value
          );

          const totalStat = Number(
            document.querySelector('.stat-only-total-pages').textContent
          );
          const currentCardTotal = Number(totalPages.textContent);

          const currentCardTotalOld = Number(totalOld);
          const currentCardCompletedOld = Number(completedOld);

          const totalResult =
            totalStat + currentInputTotal - currentCardTotalOld;

          document.querySelector('.stat-only-total-pages').textContent =
            totalResult;

          const completedStat = Number(
            document.querySelector('.stat-only-completed-pages').textContent
          );
          const currentCardCompleted = Number(completedPages.textContent);

          const completedResult =
            completedStat + currentInputCompleted - currentCardCompletedOld;

          document.querySelector('.stat-only-completed-pages').textContent =
            completedResult;

          bookName.textContent = inputTitleEdit.value;
          bookAuthor.textContent = inputAuthorEdit.value;
          totalPages.textContent = inputTotalEdit.value;
          completedPages.textContent = inputCompletedEdit.value;

          myLibrary[cardNumber].title = inputTitleEdit.value;
          myLibrary[cardNumber].author = inputAuthorEdit.value;
          myLibrary[cardNumber].completedPages = inputCompletedEdit.value;
          myLibrary[cardNumber].totalPages = inputTotalEdit.value;

          if (
            document.querySelector('.text-pole3-edit input').value ===
            document.querySelector('.text-pole4-edit input').value
          ) {
            const completedBooks = document.querySelector(
              '.stat-only-completed-books'
            ).textContent;
            const allBookCards = document.querySelectorAll('.book-card');
            const numberValue = value.getAttribute('data-card');
          }

          if (
            document.querySelector('.text-pole3-edit input').value ===
            document.querySelector('.text-pole4-edit input').value
          ) {
            if (book.querySelector('.tick').style.backgroundColor !== 'green') {
              const completedBooks = document.querySelector(
                '.stat-only-completed-books'
              ).textContent;
              const finalCompletedBooks = Number(completedBooks) + 1;
              document.querySelector('.stat-only-completed-books').textContent =
                finalCompletedBooks;
              const allBookCards = document.querySelectorAll('.book-card');
            }

            if (
              Number(document.querySelector('.text-pole3-edit input').value) ===
              Number(document.querySelector('.text-pole4-edit input').value)
            ) {
              book.querySelector('.tick').style.backgroundColor = 'green';
            }
          }

          if (
            Number(document.querySelector('.text-pole3-edit input').value) !==
              Number(document.querySelector('.text-pole4-edit input').value) &&
            book.querySelector('.tick').style.backgroundColor == 'green'
          ) {
            book.querySelector('.tick').style.backgroundColor = 'white';
            const completedBooks = document.querySelector(
              '.stat-only-completed-books'
            ).textContent;
            const finalCompletedBooks = Number(completedBooks) - 1;
            document.querySelector('.stat-only-completed-books').textContent =
              finalCompletedBooks;
          }

          event.stopImmediatePropagation();
          removeFormEdit();
        }
      });

      function removeFormEdit() {
        bookFormEdit.style.top = '-200%';
        checkboxEdit.checked = false;
      }
    }
  });
}

function removeCard(element) {
  const dataNum = element.getAttribute('data-card');
  const allBookCards = document.querySelectorAll('.book-card');
  allBookCards.forEach((card) => {
    if (card.getAttribute('data-card') === dataNum) {
      const currentTotal = card.querySelector('.book-card-stats');

      // REMOVES BOOK TOTAL PAGES FROM STATS

      const currentTotalValue = Number(
        currentTotal.querySelector('.book-card-stat-total').textContent
      ); // current card total
      const totalForm = Number(
        document.querySelector('.stat-only-total-pages').textContent
      ); // current total stats
      document.querySelector('.stat-only-total-pages').textContent =
        totalForm - currentTotalValue;

      // REMOVES BOOK COMPLETED PAGES FROM STATS

      const currentCompletedValue = Number(
        currentTotal.querySelector('.book-card-stat-read').textContent
      ); // current card completed
      const completedForm = Number(
        document.querySelector('.stat-only-completed-pages').textContent
      ); // current completed stats
      document.querySelector('.stat-only-completed-pages').textContent =
        completedForm - currentCompletedValue;

      // REMOVES BOOK TOTAL PAGES FROM STATS

      const totalBooksStat = Number(
        document.querySelector('.stat-only-total-books').textContent
      );
      const totalBooksStatPlus = totalBooksStat - 1;
      document.querySelector('.stat-only-total-books').textContent =
        totalBooksStatPlus;

      // REMOVES ONE BOOK FROM COMPLETED BOOKS STATS

      if (
        card.querySelector('.book-card-stat-read').textContent ==
        card.querySelector('.book-card-stat-total').textContent
      ) {
        const completedBooksStat = document.querySelector(
          '.stat-only-completed-books'
        ).textContent;
        const result = completedBooksStat - 1;
        document.querySelector('.stat-only-completed-books').textContent =
          result;
      }

      card.remove();
    }
  });
  myLibrary.splice(dataNum, 1);
}

function loopThroughtArray(num) {
  for (let i = num - 1; i <= myLibrary.length - 1; i++) {
    // CREATE BOOK CARD

    const mainDiv = library.appendChild(document.createElement('div'));
    mainDiv.classList.add('book-card');
    mainDiv
      .appendChild(document.createElement('div'))
      .classList.add('book-card-edit-buttons');
    mainDiv
      .appendChild(document.createElement('div'))
      .classList.add('book-card-name');
    mainDiv
      .appendChild(document.createElement('div'))
      .classList.add('book-card-author');
    mainDiv
      .appendChild(document.createElement('div'))
      .classList.add('book-card-buttons');
    mainDiv
      .appendChild(document.createElement('div'))
      .classList.add('book-card-stats');

    // CREATE EDIT BUTTONS

    const currentEditButtons = mainDiv.querySelector('.book-card-edit-buttons');
    currentEditButtons
      .appendChild(document.createElement('button'))
      .classList.add('edit');
    currentEditButtons
      .appendChild(document.createElement('button'))
      .classList.add('remove');
    const editButton = currentEditButtons.querySelector('.edit');
    const removeButton = currentEditButtons.querySelector('.remove');
    editButton
      .appendChild(document.createElement('i'))
      .classList.add('fa-solid', 'fa-pen-to-square');
    removeButton
      .appendChild(document.createElement('i'))
      .classList.add('fa-solid', 'fa-trash');

    // CREATE NAME OF THE BOOK

    const bookName = mainDiv.querySelector('.book-card-name');
    bookName
      .appendChild(document.createElement('h2'))
      .classList.add('book-card-name-detail', 'text');
    const bookNameHeading = bookName.querySelector('.book-card-name-detail');
    bookNameHeading.textContent = myLibrary[i].title;

    // CREATE AUTHOR OF THE BOOK

    const bookAuthor = mainDiv.querySelector('.book-card-author');
    bookAuthor
      .appendChild(document.createElement('p'))
      .classList.add('book-card-author-detail', 'text');
    const bookAuthorHeading = bookAuthor.querySelector(
      '.book-card-author-detail'
    );
    bookAuthorHeading.textContent = myLibrary[i].author;

    // CREATE NAME OF THE BOOK

    const currentButtons = mainDiv.querySelector('.book-card-buttons');
    currentButtons
      .appendChild(document.createElement('button'))
      .classList.add('minus');
    currentButtons
      .appendChild(document.createElement('button'))
      .classList.add('tick');
    currentButtons
      .appendChild(document.createElement('button'))
      .classList.add('plus');
    const minusButton = currentButtons.querySelector('.minus');
    const tickButton = currentButtons.querySelector('.tick');
    const plusButton = currentButtons.querySelector('.plus');
    minusButton
      .appendChild(document.createElement('i'))
      .classList.add('fa-solid', 'fa-minus');
    tickButton
      .appendChild(document.createElement('i'))
      .classList.add('fa-solid', 'fa-check');
    plusButton
      .appendChild(document.createElement('i'))
      .classList.add('fa-solid', 'fa-plus');

    // CREATE BOOK STATS

    const bookStats = mainDiv.querySelector('.book-card-stats');
    bookStats
      .appendChild(document.createElement('p'))
      .classList.add('book-card-stat-read');
    bookStats
      .appendChild(document.createElement('p'))
      .classList.add('info-icon');
    bookStats
      .appendChild(document.createElement('p'))
      .classList.add('book-card-stat-total');
    const infoIcon = bookStats.querySelector('.info-icon');
    infoIcon
      .appendChild(document.createElement('i'))
      .classList.add('fa-solid', 'fa-book-open');
    const bookRead = bookStats.querySelector('.book-card-stat-read');
    bookRead.textContent = myLibrary[i].completedPages;
    const bookTotal = bookStats.querySelector('.book-card-stat-total');
    bookTotal.textContent = myLibrary[i].totalPages;

    addAttribute();
  }

  // ADDS DATA ATTRIBUTES TO ALL ELEMENTS IN BOOK-CARD AND TO BOOK-CARD

  function addAttribute() {
    const allBookCards = library.querySelectorAll('.book-card');

    for (let i = 0; i <= allBookCards.length - 1; i++) {
      allBookCards[i].setAttribute('data-card', [i]);
      const allBookCardsChildren = allBookCards[i].querySelectorAll(
        '.book-card div, .book-card button, .book-card p, .book-card i, .book-card h2'
      );

      allBookCardsChildren.forEach((child) => {
        child.setAttribute('data-card', [i]);
      });
    }
  }
}

// MENU FOR MOBILE DEVICES

const menu = document.querySelector('.menu');
const rightIcon = document.querySelector('.right');
const leftIcon = document.querySelector('.left');

rightIcon.addEventListener('click', () => {
  menu.classList.add('mobile');
  rightIcon.style.display = 'none';
  leftIcon.style.display = 'unset';
});

leftIcon.addEventListener('click', () => {
  menu.classList.remove('mobile');
  rightIcon.style.display = 'unset';
  leftIcon.style.display = 'none';
});

// DELETE ALL BUTTON

const deleteButton = document.querySelector('.delete');

deleteButton.addEventListener('click', () => {
  const allBookCards = document.querySelectorAll('.book-card');
  allBookCards.forEach((card) => {
    card.remove();
  });

  myLibrary = [];

  document.querySelector('.stat-only-total-pages').textContent = 0;
  document.querySelector('.stat-only-completed-books').textContent = 0;
  document.querySelector('.stat-only-total-books').textContent = 0;
  document.querySelector('.stat-only-completed-pages').textContent = 0;
});