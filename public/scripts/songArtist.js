/*-----------------------------------------------------------------------------
    Data validation before INSERT form submit
-----------------------------------------------------------------------------*/
const addSongArtistListener = () => {
  const songArtistInsertSubmitBtn = document.getElementById(
    "songArtistInsertSubmit"
    );
    songArtistInsertSubmitBtn.addEventListener("click", (e) => {
      const songSelect = document.getElementById("songSelect");
      if (songSelect.value === "null") {
        songSelect.style.borderColor = "rgb(241, 70, 104)";
        alert("Song ID required -- please select a song.");
        e.preventDefault();
      }
      const artistSelect = document.getElementById("artistSelect");
      if (artistSelect.value === "null") {
        artistSelect.style.borderColor = "rgb(241, 70, 104)";
        alert("Artist ID required -- please select an artist.");
        e.preventDefault();
      }
    });
  };
    
/*-----------------------------------------------------------------------------
    Listener for "Insert New SongArtist" button.
-----------------------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', () => {
  addSongArtistListener()
})