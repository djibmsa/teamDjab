function createArticle(read) {
  let article = document.createElement("div");
  article.classList.add("article");

  let articleBody = document.createElement("div");
  articleBody.classList.add("article-body");

  let h2 = document.createElement("h2");
  h2.classList.add("article-title");
  h2.innerText = read.title;

  let p = document.createElement("p");
  p.classList.add("article-description");
  p.innerText = read.desc;

  article.appendChild(articleBody);
  article.appendChild(h2);
  article.appendChild(p);

  return article;
}
