import { renderGallery } from "./js/render-functions";
import { fetchImages } from "./js/pixabay-api";
const form = document.querySelector(".form");
const loader = document.querySelector(".loader");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const query = event.target.elements["search-text"].value.trim();
  if (!query) return;
  loader.style.display = "block";
  try {
    const images = await fetchImages(query);
    renderGallery(images);
    event.target.reset();
  } catch {
    iziToast.error({ title: "Error", message: "Failed to fetch images" });
  } finally {
    loader.style.display = "none";
  }
});
