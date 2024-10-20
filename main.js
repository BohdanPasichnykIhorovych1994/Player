import Player from "./player.js";
import { tracks } from "./tracks.js";

const player = new Player(tracks);
const trackListContainer = document.getElementById("track-list");
function createTrackList() {
  tracks.forEach((track, index) => {
    const trackItem = document.createElement("div");
    trackItem.classList.add("track-item");
    trackItem.textContent = track.title;
    trackItem.addEventListener("click", () => {
      player.trackIndex = index;
      player.loadTrack(index);
      player.playTrack();
    });
    trackListContainer.appendChild(trackItem);
  });
}
createTrackList();
