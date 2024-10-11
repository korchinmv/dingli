import noUiSlider from "nouislider";
import {
  filterDropdown,
  filterHeightRangeSlider,
  filterWeightRangeSlider,
  inputFirstHeightRangeSlider,
  inputSecondHeightRangeSlider,
  inputFirstWeightRangeSlider,
  inputSecondWeightRangeSlider,
  openFilterBtn,
  filterElement,
  closeFilterBtn,
} from "../_vars.js";

const inputsHeightRangeSlider = [
  inputFirstHeightRangeSlider,
  inputSecondHeightRangeSlider,
];

const inputsWeightRangeSlider = [
  inputFirstWeightRangeSlider,
  inputSecondWeightRangeSlider,
];

//Открытие и закрытие фильтра (мобильная версия)
if (openFilterBtn) {
  openFilterBtn.addEventListener("click", () => {
    filterElement.classList.add("catalog-page__filter--active");
  });

  closeFilterBtn.addEventListener("click", () => {
    filterElement.classList.remove("catalog-page__filter--active");
  });
}

//Слайдер фильтра по высоте
noUiSlider.create(filterHeightRangeSlider, {
  start: [4, 180],
  step: 1,
  range: {
    min: [4],
    max: [180],
  },
  format: {
    to: (v) => v | 0,
    from: (v) => v | 0,
  },
});

filterHeightRangeSlider.noUiSlider.on("update", function (values, handle) {
  inputsHeightRangeSlider[handle].value = values[handle];
});

inputFirstHeightRangeSlider.addEventListener("change", function () {
  filterHeightRangeSlider.noUiSlider.set([this.value, null]);
});

inputSecondHeightRangeSlider.addEventListener("change", function () {
  filterHeightRangeSlider.noUiSlider.set([null, this.value]);
});

//Слайдер фильтра по весу
noUiSlider.create(filterWeightRangeSlider, {
  start: [0, 1800],
  step: 1,
  range: {
    min: [135],
    max: [1800],
  },
  format: {
    to: (v) => v | 0,
    from: (v) => v | 0,
  },
});

filterWeightRangeSlider.noUiSlider.on("update", function (values, handle) {
  inputsWeightRangeSlider[handle].value = values[handle];
});

inputFirstWeightRangeSlider.addEventListener("change", function () {
  filterWeightRangeSlider.noUiSlider.set([this.value, null]);
});

inputSecondWeightRangeSlider.addEventListener("change", function () {
  filterWeightRangeSlider.noUiSlider.set([null, this.value]);
});

//Дропдауны с чекбоксами в фильтре
if (filterDropdown) {
  filterDropdown.forEach((el) => {
    const button = el.querySelector('span[data-toggle="dropdown"]');
    const dropdownMenu = el.querySelector(".filter__dropdown-menu");

    if (button) {
      button.addEventListener("click", () => {
        if (!dropdownMenu.classList.contains("show")) {
          dropdownMenu.classList.add("show");
          dropdownMenu.classList.remove("hide");
          button.classList.add("filter__name--active");
        } else {
          dropdownMenu.classList.remove("show");
          dropdownMenu.classList.add("hide");
          button.classList.remove("filter__name--active");
        }
      });
    }
  });
}
