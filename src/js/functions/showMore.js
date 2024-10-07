const blockText = document?.querySelector(".text-block");
const moreBtn = document?.querySelector(".more-button");
const pharagraphs = document?.querySelectorAll(".text-block__text");

const showMoreText = (block, btn, qtyParagraphs) => {
  if (pharagraphs.length > qtyParagraphs) {
    for (let i = qtyParagraphs; i < pharagraphs.length + 1; i++) {
      console.log(pharagraphs[i]);

      pharagraphs[i].classList.add("hidden");
      btn.classList.add("hidden");
    }
  }
};

showMoreText(blockText, moreBtn, 3);
