const allEditButtons = document.querySelectorAll('.editButton');
const allDeleteButtons = document.querySelectorAll('.deleteButton');
let rowRestoreValues = [];
let editInProgress = false;

// Add editing functionality to all edit buttons on page
allEditButtons.forEach((button) =>
  button.addEventListener('click', () => {
    if (editInProgress) {
      alert(
        'Save or cancel modifications to your row before modifying another row.'
      );
      return;
    }

    // bool until changes made, take focus off button
    editInProgress = true;
    button.blur();

    // grab td column holding edit & delete | row | rowId | artist name column
    const oldButtonCell = button.parentElement;
    const row = button.parentElement.parentElement;
    const rowId = row.getAttribute('id');

    // Save pre-edited values in case user cancels modifications
    // e.g. array will save [ "Crystal Castles", "2"] for artist & label ID

    rowRestoreValues = Object.values(row.children).map(
      (child) => child.innerHTML
    );
    rowRestoreValues.push(oldButtonCell);

    // Grab all columns from row except first and last
    // Create new: <td> -> <input type="text">
    for (let i = 1; i < row.children.length - 1; i++) {
      // Build the text input and its properties
      const input = document.createElement('input');
      input.id = `i${i}`;
      input.type = 'text';
      input.autofocus = i === 1 ? true : false;
      input.value = `${rowRestoreValues[i]}`;
      input.onmouseover =
        'this.setSelectionRange(this.value.length,this.value.length);';
      input.onfocus =
        'this.setSelectionRange(this.value.length,this.value.length);';

      // Build the parent <td>
      const newEditableColumn = document.createElement('td');
      newEditableColumn.appendChild(input);

      // Replace row <td> with this newly built <td>
      row.replaceChild(newEditableColumn, row.children[i]);
    }

    // update button column buttons: edit/delete -> save/cancel
    newButtonCell = document.createElement('td');
    newButtonCell.innerHTML = `
    <button class="button is-small is-primary" id="editBtn${rowId}" style="margin-right:2px;">
    <strong>Save</strong>
    <span class="icon is-small">
      <i class="fas fa-check" aria-hidden="true"></i>
    </span>
    </button>
    <button class="button is-small is-danger" id="delBtn${rowId}" style="margin-right:2px;">
    <strong>Cancel</strong>
    <span class="icon is-small">
      <i class="fas fa-ban" aria-hidden="true"></i>
    </span>
    </button>
    `;

    row.replaceChild(newButtonCell, oldButtonCell);

    // Add listener to SAVE button
    document.getElementById(`editBtn${rowId}`).addEventListener('click', () => {
      const rowCells = Object.values(row.children);

      // get user input values
      const values = rowCells
        .filter((child) => child.firstChild.nodeName === 'INPUT')
        .map((td) => td.firstChild.value);

      values.forEach((value, i) => {
        rowCells[i + 1].innerHTML = `<td>${value}</td>`;
      });
    });

    // Add listener to CANCEL button
    document.getElementById(`delBtn${rowId}`).addEventListener('click', () => {
      console.log('you made it to cancel');

      let row = document.getElementById(`${rowId}`);

      console.log(row);
      for (let i = 0; i < row.children.length; i++) {
        row.children[i].innerHTML = rowRestoreValues[i];
      }

      // NEED TO ADD NEW LISTENER TO RESTORED EDIT BUTTON

      editInProgress = false;
    });

    row.children[1].focus();
  })
);

// Add delete functionality to all delete buttons on page
allDeleteButtons.forEach((button) =>
  button.addEventListener('click', () => {
    const row = button.parentElement.parentElement;
    row.parentElement.removeChild(row);
  })
);
