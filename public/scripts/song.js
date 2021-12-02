/*-----------------------------------------------------------------------------
    Data validation before INSERT form submit
-----------------------------------------------------------------------------*/
const addSongListener = () => {
  const labelInsertSubmitBtn = document.getElementById("songInsertSubmit");
  labelInsertSubmitBtn.addEventListener("click", (e) => {
    const songNameInput = document.getElementById("songNameInput");
    if (!songNameInput.value) {
      songNameInput.classList.add("is-danger");
      alert("Song Name required.");
      e.preventDefault();
    }
  });
};

/*-----------------------------------------------------------------------------
    Listener for "Insert New Song" button.
-----------------------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', () => {
  addSongListener()
});
