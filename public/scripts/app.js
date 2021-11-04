const edit = document.getElementById("editButton");

edit.addEventListener("click", () => {
  edit.blur();
  const row = edit.parentElement.parentElement;
  const artist = row.children[1];
  const newArtist = document.createElement("td");

  newArtist.innerHTML = `<input type="text" autofocus value="${artist.innerText}" 
  onmouseover="this.setSelectionRange(this.value.length,this.value.length);" 
  onfocus="this.setSelectionRange(this.value.length,this.value.length);"">`;

  row.replaceChild(newArtist, artist);

  const label = row.children[2];
  const newLabel = document.createElement("td");

  newLabel.innerHTML = `<input type="text" autofocus value="${label.innerText}" 
  onmouseover="this.setSelectionRange(this.value.length,this.value.length);" 
  onfocus="this.setSelectionRange(this.value.length,this.value.length);"">`;

  row.replaceChild(newLabel, label);

  newArtist.focus();
});

const del = document.querySelectorAll("#deleteButton");

del.forEach(button =>
  button.addEventListener("click", () => {
    console.log("hey");
    const row = button.parentElement.parentElement;
    row.parentElement.removeChild(row);
  })
);
