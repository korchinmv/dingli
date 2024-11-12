window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  document
    .querySelector(":root")
    .style.setProperty("--top-pos", `${scrollPosition}px`);
});
