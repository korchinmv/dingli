const copyBtn = document?.querySelector("[data-copy]");
const copyElement = document?.querySelector("[data-copy-adress]");

const copyText = (btn, element) => {
  if (btn) {
    btn.addEventListener("click", () => {
      const text = element.textContent;
      navigator.clipboard.writeText(text);
      copyBtn.classList.add("copy--active");
    });
  }
};

copyText(copyBtn, copyElement);
