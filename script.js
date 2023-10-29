const form = document.getElementById("form");
const search = document.getElementById("search");
const result = document.getElementById("result");
const more = document.getElementById("more");

const apiURL = "https://api.lyrics.ovh";

// Search by song or artist
async function searchSongs(term) {
  const res = await fetch(`${apiURL}/suggest/(${term})`);
  const data = await res.json();
  showData(data);
}

// Show song and artist in DOM
function showData(data) {
  let output = "";

  data.data.foEach((song) => {
    output += `
    <li>
    <span><strong>${song.artist.name}</strong> - $</span>
    <button class="btn" data-articst="{song.artist.name}" data-songtitle="${song.title}">Get Lyrics</button>
    </li>
    `;
  });
  result.innerHTML = `
  <ul class="song">
  ${output}
  </ul>
  `;
}

// Event listners
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value.trim();
  if (!searchTerm) {
    alert("please type a search term");
  } else {
    searchSongs(searchTerm);
  }
});
