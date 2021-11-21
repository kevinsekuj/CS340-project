/*-----------------------------------------------------------------------------
    Data validation before INSERT form submit
-----------------------------------------------------------------------------*/
const labelInsertSubmitBtn = document.getElementById("songInsertSubmit");
labelInsertSubmitBtn.addEventListener("click", (e) => {
  const songNameInput = document.getElementById("songNameInput");
  if (!songNameInput.value) {
    songNameInput.classList.add("is-danger");
    alert("Song Name required.");
    e.preventDefault();
  }
});
