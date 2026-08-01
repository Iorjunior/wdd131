document.addEventListener("DOMContentLoaded", () => {
  let count = Number(window.localStorage.getItem("numReviews-ls")) || 0;
  count++;
  window.localStorage.setItem("numReviews-ls", count);

  const reviewCountDisplay = document.querySelector("#review-count");
  if (reviewCountDisplay) {
    reviewCountDisplay.textContent = count;
  }
});
