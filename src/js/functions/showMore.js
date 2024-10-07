const pharagraphs = document?.querySelectorAll(".text-block__text");
const moreBtn = document?.querySelector(".more-button");

const showMoreText = (block, btn, qtyParagraphs) => {
  if (document.documentElement.clientWidth < 768) {
    if (block.length > qtyParagraphs) {
      for (let i = qtyParagraphs; i < block.length; i++) {
        block[i].classList.add("text-block__text--hidden");
      }
    }
  }

  btn.addEventListener("click", () => {
    btn.classList.toggle("more-button--active");

    for (let i = qtyParagraphs; i < block.length; i++) {
      block[i].classList.toggle("text-block__text--hidden");
    }
  });
};

showMoreText(pharagraphs, moreBtn, 3);
