const edit = document.querySelectorAll('.editButton');
const del = document.querySelectorAll('.deleteButton');
let unsavedEdit = false;

edit.forEach((button) =>
  button.addEventListener('click', () => {
    if (unsavedEdit) {
      alert('Please save or cancel your current operation');
      return;
    }

    unsavedEdit = true;
    button.blur();

    const cell = button.parentElement;
    const row = button.parentElement.parentElement;
    const rowId = row.getAttribute('id');
    const artist = row.children[1];

    const newArtist = document.createElement('td');

    newArtist.innerHTML = `<input type="text" autofocus value="${artist.innerText}"
    onmouseover="this.setSelectionRange(this.value.length,this.value.length);"
    onfocus="this.setSelectionRange(this.value.length,this.value.length);"">`;

    row.replaceChild(newArtist, artist);

    const label = row.children[2];
    const newLabel = document.createElement('td');

    newLabel.innerHTML = `<input type="text" autofocus value="${label.innerText}"
    onmouseover="this.setSelectionRange(this.value.length,this.value.length);"
    onfocus="this.setSelectionRange(this.value.length,this.value.length);"">`;

    cell.innerHTML = `
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

    document.getElementById(`editBtn${rowId}`).addEventListener('click', () => {
      console.log('you made it to edit');
      // save the row
    });

    document.getElementById(`delBtn${rowId}`).addEventListener('click', () => {
      console.log('you made it to cancel');
      // cancel and reset the row
    });

    row.replaceChild(newLabel, label);
    newArtist.focus();
  })
);

del.forEach((button) =>
  button.addEventListener('click', () => {
    const row = button.parentElement.parentElement;
    row.parentElement.removeChild(row);
  })
);
