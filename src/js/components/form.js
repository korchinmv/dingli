import { validateForms } from "./../functions/validate-forms.js";
const textarea = document.querySelector(".input-textarea");
textarea.addEventListener("keyup", () => {
  textarea.style.height = "auto";
  textarea.style.height = `${textarea.scrollHeight}px`;
});

const rulesContactsForm = [
  {
    ruleSelector: ".input-name",
    rules: [
      {
        rule: "minLength",
        value: 3,
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните имя!",
      },
    ],
  },
  {
    ruleSelector: ".input-tel",
    tel: true,
    telError: "Введите корректный телефон",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните телефон!",
      },
    ],
  },
  {
    ruleSelector: ".input-mail",
    mailError: "Введите корректно адресс почты",
    rules: [
      {
        rule: "required",
        rule: "email",
        value: true,
        errorMessage: "Напишите свою почту!",
      },
    ],
  },
  {
    ruleSelector: ".input-textarea",
    mailError: "Введите корректное сообщение",
    rules: [
      {
        rule: "required",
        errorMessage: "Напишите сообщение!",
      },
    ],
  },
  {
    ruleSelector: ".input-company",
    mailError: "Введите корректное сообщение",
    rules: [
      {
        rule: "required",
        errorMessage: "Напишите название компании",
      },
    ],
  },
];

const rulesFooterForm = [
  {
    ruleSelector: ".input-name",
    rules: [
      {
        rule: "minLength",
        value: 3,
        errorMessage: "Слишком короткое имя",
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните имя!",
      },
      {
        rule: "customRegexp",
        value: /^[A-zА-я]+$/i,
        errorMessage: "Имя должно содержать буквы",
      },
    ],
  },
  {
    ruleSelector: ".input-tel",
    tel: true,
    telError: "Введите корректный телефон",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните телефон!",
      },
    ],
  },
  {
    ruleSelector: ".input-mail",
    mailError: "Введите корректно адресс почты",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Напишите свою почту",
      },
      {
        rule: "email",
        errorMessage: "Не верно указана почта",
      },
    ],
  },
  {
    ruleSelector: ".input-textarea",
    mailError: "Введите корректное сообщение",
    rules: [
      {
        rule: "required",
        errorMessage: "Напишите сообщение!",
      },
    ],
  },
  {
    ruleSelector: ".input-checkbox",
    checkboxError: "Нужно поставить галочку",
    rules: [
      {
        rule: "required",
        errorMessage: "Нужно согласиться с условиями",
      },
    ],
  },
  {
    ruleSelector: ".form__custom-select",
    rules: [
      {
        rule: "required",
        errorMessage: "Выбирете одну из услуг",
      },
    ],
  },
];

const afterForm = () => {
  console.log("Произошла отправка, тут можно писать любые действия");
};

validateForms("#contacts-form", rulesContactsForm, afterForm);
validateForms("#contacts-form-mobile", rulesContactsForm, afterForm);
validateForms("#footer-form", rulesFooterForm, afterForm);
