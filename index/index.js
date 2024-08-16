document.querySelector(".burger").addEventListener("click", () => {
  document.querySelector(".menu").classList.toggle("active");
});

let articles = document.getElementsByClassName("articles")[0];

for (read of story) {
  let article = createArticle(read);
  articles.appendChild(article);
}
