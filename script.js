const form = document.getElementById("form");
const search = document.getElementById("search");
const result = document.getElementById("result"); // Corrected ID
const more = document.getElementById("more");

const apiURL = "https://api.lyrics.ovh";

// Search by song or artist

async function searchSongs(term) {
  const res = await fetch(`${apiURL}/suggest/${term}`);
  const data = await res.json();

  showData(data);
}

// Show song and artist in DOM
function showData(data) {
  let output = "";

  data.data.forEach((song) => {
    output += `
    <li>
      <span><strong>${song.artist.name}</strong> - ${song.title}</span> <!-- Corrected property name -->
      <button class="btn" data-artist="${song.artist.name}" data-songtitle="${song.title}">Get Lyrics</button> <!-- Corrected property name -->
    </li>
    `;
  });

  result.innerHTML = `
   <ul class="songs">
   ${output}
   </ul>
   `;
}

// Event listener for the form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value.trim();
  if (!searchTerm) {
    alert("Please type in a search term");
  } else {
    searchSongs(searchTerm);
  }
});

// Event listener for the form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value.trim();
  if (!searchTerm) {
    alert("Please type in a search term");
  } else {
    searchSongs(searchTerm);
  }
});

// // Get lyrics button click
// result.addEventListener("click", (e) => {
//   const clickedEl = e.target;

//   if (clickedEl.tagName === "BUTTON") {
//     const artist = clickedEl.getAttribute("data-artist");
//     const songTitel = clickedEl.getAttribute("data-songtitle");

//     getLyrics(artist, songTitel);
//   }
// });
