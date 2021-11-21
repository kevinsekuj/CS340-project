/*-----------------------------------------------------------------------------
    Data validation before INSERT form submit
-----------------------------------------------------------------------------*/
const labelInsertSubmitBtn = document.getElementById("labelInsertSubmit");
labelInsertSubmitBtn.addEventListener("click", (e) => {
  const labelNameInput = document.getElementById("labelNameInput");
  if (!labelNameInput.value) {
    labelNameInput.classList.add("is-danger");
    alert("Label Name required.");
    e.preventDefault();
  }
});
