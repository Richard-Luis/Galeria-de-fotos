const searchBox = document.getElementById("search-box");

const imagens = [...document.querySelectorAll(".imagem-front")];

searchBox.addEventListener("input", ({ target }) => {
  for (const imagem of imagens) {
    if (
      !imagem
        .getAttribute("data-title")
        .toLowerCase()
        .includes(target.value.toLowerCase())
    ) {
      imagem.style.display = "none";
    } else {
      imagem.style.display = "block";
    }
  }
});
