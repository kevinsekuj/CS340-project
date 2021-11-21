const allEditButtons = document.querySelectorAll('.editButton');
const allDeleteButtons = document.querySelectorAll('.deleteButton');
let rowRestoreValues = [];
let editInProgress = false;

/*-----------------------------------------------------------------------------
    Generic function to trim whitespace from string (from Stack Overflow)
-----------------------------------------------------------------------------*/
if (typeof String.prototype.trim === 'undefined') {
  String.prototype.trim = function () {
    return String(this).replace(/^\s+|\s+$/g, '');
  };
}

/*-----------------------------------------------------------------------------
    Artist Page: EDIT Button Listeners
-----------------------------------------------------------------------------*/
const addEditButtonListener = (editButton) => {
  editButton.addEventListener('click', () => {
    if (editInProgress) {
      alert(
        'Save or cancel modifications to your row before modifying another row.'
      );
      return;
    }

    // bool until changes made, take focus off button
    editInProgress = true;
    editButton.blur();

    // grab td column holding edit & delete | row | rowId | artist name column
    const oldButtonCell = editButton.parentElement;
    const row = editButton.parentElement.parentElement;
    const rowId = row.getAttribute('id');

    // Save pre-edited values in case user cancels modifications
    // e.g. array will save [ "Crystal Castles", "2"] for artist & label ID
    rowRestoreValues = Object.values(row.children).map((child) =>
      child.innerHTML.trim()
    );
    rowRestoreValues.push(oldButtonCell);

    // Convert table row cells into editable inputs

    // 1) Build the text input for Artist Name
    const artistEditableInput = document.createElement('input');
    artistEditableInput.type = 'text';
    artistEditableInput.value = `${rowRestoreValues[1].trim()}`;
    artistEditableInput.onmouseover =
      'this.setSelectionRange(this.value.length,this.value.length);';
    artistEditableInput.onfocus =
      'this.setSelectionRange(this.value.length,this.value.length);';
    artistEditableInput.classList.add('input', 'is-small', 'is-primary');
    artistEditableInput.style.width = '50%';

    // Build the parent <td>
    let newEditableColumn = document.createElement('td');
    newEditableColumn.appendChild(artistEditableInput);

    // Replace row <td> with this newly built <td>
    row.replaceChild(newEditableColumn, row.children[1]);

    // 2) Build the dropdown options for Label ID
    const currentLabels = Object.values(
      document.getElementById('labelsDropdown').getElementsByTagName('option')
    );
    const labelIdDropdown = document.createElement('select');
    labelIdDropdown.classList.add('select');
    for (let i = 0; i < currentLabels.length; i++) {
      let option = document.createElement('option');
      option.value = currentLabels[i].value;
      option.text = currentLabels[i].text;
      labelIdDropdown.appendChild(option);
    }
    labelIdDropdown.value = rowRestoreValues[2] ? rowRestoreValues[2] : 'null';

    newEditableColumn = document.createElement('td');
    let selectDiv = document.createElement('div');
    selectDiv.classList.add('control', 'select', 'is-primary', 'is-small');
    selectDiv.appendChild(labelIdDropdown);
    newEditableColumn.appendChild(selectDiv);
    row.replaceChild(newEditableColumn, row.children[2]);

    row.children[1].firstElementChild.focus();

    // 3) update button column buttons: edit/delete -> save/cancel
    newButtonCell = document.createElement('td');
    newButtonCell.innerHTML = `
    <button 
      class="button is-small is-primary" id="saveBtn${rowId}">
    <span class="icon is-small">
      <i class="fas fa-check" aria-hidden="true"></i>
    </span>
    <strong>Confirm Edits</strong>
    </button>

    <button 
      class="button is-small is-danger is-light" 
      id="cancelBtn${rowId}">
      <strong>Discard</strong>

    </button>
    `;

    row.replaceChild(newButtonCell, oldButtonCell);

    // SAVE button listener
    document.getElementById(`saveBtn${rowId}`).addEventListener('click', () => {
      const rowCells = Object.values(row.children);

      // get user input values
      const values = rowCells
        .filter((child) => child.firstChild.nodeName === 'INPUT')
        .map((td) => td.firstChild.value);

      let selectElemValue =
        rowCells[2].firstElementChild.firstElementChild.value;
      selectElemValue = selectElemValue === 'null' ? '' : selectElemValue;
      values.push(selectElemValue);

      values.forEach((value, i) => {
        rowCells[i + 1].innerHTML = `<td>${value}</td>`;
      });

      // Restore edit/delete buttons
      row.children[3].innerHTML = rowRestoreValues[3];

      const buttonCell = row.children[row.children.length - 1];
      const editButton = buttonCell.firstElementChild;
      const deleteButton = editButton.nextElementSibling;

      // Add listener to edit button
      addEditButtonListener(editButton);

      // Add listener to cancel button
      addDeleteButtonListener(deleteButton);

      const editRequest = async (data) => {
        await fetch('/artist'),
          {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          };
      };
      const artist = {
        artistId: rowId,
        artistName: values[0],
        labelId: values[1],
      };
      console.log('data passed to edit request', artist);
      editRequest(artist);

      rowRestoreValues.length = 0;
      editInProgress = false;
    });

    // CANCEL button listener
    document
      .getElementById(`cancelBtn${rowId}`)
      .addEventListener('click', () => {
        for (let i = 0; i < row.children.length; i++) {
          row.children[i].innerHTML = rowRestoreValues[i];
        }

        const buttonCell = row.children[row.children.length - 1];
        const editButton = buttonCell.firstElementChild;
        const deleteButton = editButton.nextElementSibling;

        // Add listener to edit button
        addEditButtonListener(editButton);

        // Add listener to cancel button
        addDeleteButtonListener(deleteButton);

        rowRestoreValues.length = 0;
        editInProgress = false;
        document.activeElement.blur();
      });
    row.children[1].focus();
  });
};

/*-----------------------------------------------------------------------------
    Artist page: DELETE Button Listener
-----------------------------------------------------------------------------*/
const addDeleteButtonListener = (deleteButtonElement) => {
  deleteButtonElement.addEventListener('click', (e) => {
    if (editInProgress) {
      alert(
        'Save or cancel modifications to your row before modifying another row.'
      );
      return;
    }
    const row = deleteButtonElement.parentElement.parentElement;
    const id = row.getAttribute('id');
    row.parentElement.removeChild(row);

    const deleteRequest = async (id) => {
      await fetch('/artist', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: id }),
      });
    };

    deleteRequest(id);
    e.preventDefault();
  });
};

/*-----------------------------------------------------------------------------
    Artist Page: Add listeners to all edit buttons on page
-----------------------------------------------------------------------------*/
allEditButtons.forEach((button) => addEditButtonListener(button));

/*-----------------------------------------------------------------------------
    Artist Page: Edit Button Listeners
-----------------------------------------------------------------------------*/
allDeleteButtons.forEach((button) => addDeleteButtonListener(button));

/*-----------------------------------------------------------------------------
    Functionality for navbar burger resizing
-----------------------------------------------------------------------------*/
const navbarBurger = document.querySelectorAll('.navbar-burger');
navbarBurger.forEach((el) => {
  el.addEventListener('click', () => {
    const target = el.dataset.target;
    const targ = document.getElementById(target);

    el.classList.toggle('is-active');
    targ.classList.toggle('is-active');
  });
});

/*=============================================================================
                  ALBUM PAGE -- needs to move to its own file
=============================================================================*/
document.getElementById('albumSubmitButton').addEventListener('click', (e) => {
  const select = document.getElementById('artistsDropdown');
  const albumNameInput = document.getElementById('albumNameInput');
  if (!albumNameInput.value) {
    albumNameInput.classList.add('is-danger');
    alert('Album Name required.');
    e.preventDefault();
  }
  if (select.value === 'null') {
    select.classList.add('is-danger');
    alert('Artist required -- please select an artist.');
    e.preventDefault();
  }
});

/*-----------------------------------------------------------------------------
    Functionality for search results popup
-----------------------------------------------------------------------------*/
const searchBtn = document.getElementById('searchForm');
searchBtn.addEventListener('submit', (e) => {
  // popUpWindow function will center the popup in the parent window
  const popupWindow = (url, windowName, win, w, h) => {
    const y = win.top.outerHeight / 2 + win.top.screenY - h / 2;
    const x = win.top.outerWidth / 2 + win.top.screenX - w / 2;
    return win.open(
      url,
      windowName,
      `toolbar=no, location=no, directories=no, status=no, 
      menubar=no, scrollbars=yes, resizable=yes, copyhistory=no, 
      width=${w}, height=${h}, top=${y}, left=${x}`
    );
  };
  const searchParam = document.getElementById('searchQueryInput').value;
  const url = '/artist/search?searchQuery=' + searchParam;
  popupWindow(url, 'popup', window, 800, 500);
  e.preventDefault();
});
