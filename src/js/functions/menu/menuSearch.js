import {
  headerMenuList,
  headerSearchBtn,
  searchFormCloseBtn,
  searchForm,
} from "../../_vars.js";

if (headerSearchBtn) {
  headerSearchBtn.addEventListener("click", () => {
    headerSearchBtn.classList.toggle("header__search-btn--hide");

    if (headerSearchBtn.classList.contains("header__search-btn--hide")) {
      searchForm.classList.add("header__search-form--active");
      headerMenuList.classList.add("header-menu--hide");
    }
  });
}

if (searchFormCloseBtn) {
  searchFormCloseBtn.addEventListener("click", () => {
    if (searchForm.classList.contains("header__search-form--active")) {
      searchForm.classList.remove("header__search-form--active");
      headerMenuList.classList.remove("header-menu--hide");
      headerSearchBtn.classList.remove("header__search-btn--hide");
    }
  });
}
