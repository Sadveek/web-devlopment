var statusText = document.getElementById("status");
var albumList = document.getElementById("albumList");

async function loadAlbums() {
  try {
    var response = await fetch("https://jsonplaceholder.typicode.com/albums");
    var data = await response.json();

    statusText.textContent = "";

    for (var i = 0; i < 15; i++) {
      var li = document.createElement("li");
      li.textContent = data[i].title;
      albumList.appendChild(li);
    }
  } catch (error) {
    statusText.textContent = "Failed to load albums.";
  }
}

loadAlbums();