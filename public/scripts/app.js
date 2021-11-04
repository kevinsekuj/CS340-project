const edit = document.getElementById("editButton");
const del = document.getElementById("deleteButton");

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

del.addEventListener("click", () => {
  const row = document.getElementById("a1");
  row.parentElement.removeChild(row);
});
