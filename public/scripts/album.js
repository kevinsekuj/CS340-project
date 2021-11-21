/*-----------------------------------------------------------------------------
    Data validation on input fields before INSERT form submit
-----------------------------------------------------------------------------*/
const addInsertListener = () => {
  document.getElementById("albumSubmitButton").addEventListener(
    "click", (e) => {
      const artistSelect = document.getElementById("artistSelect");
      const albumNameInput = document.getElementById("albumNameInput");

      if (!albumNameInput.value) {
        albumNameInput.classList.add("is-danger");
        alert("Album Name required.");
        e.preventDefault();
      }
      if (artistSelect.value === "null") {
        artistSelect.style.borderColor = "rgb(241, 70, 104)";
        alert("Artist required -- please select an artist.");
        e.preventDefault();
      }
    }
  );
}

document.addEventListener('DOMContentLoaded', () => {
  addInsertListener()
})