const addForm = document.getElementById('addForm');
const table = document.querySelector('table');

addForm.addEventListener('submit', (e) => {
  const addArtist = async () => {
    const body = {
      artistName: document.getElementById('artistNameInput').value,
      labelId: document.getElementById('labelInput').value,
    };

    const response = await fetch('/artist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const res = await response.json();
    console.log(res);
    return res;
  };
  addArtist().then((data) => console.log(data));
  e.preventDefault();
});
