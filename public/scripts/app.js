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
  newArtist.focus();
});
