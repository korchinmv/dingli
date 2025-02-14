import { validateForms } from "./../functions/validate-forms.js";

const textarea = document.querySelector(".input-textarea");
textarea.addEventListener("keyup", () => {
  textarea.style.height = "auto";
  textarea.style.height = `${textarea.scrollHeight}px`;
});

const afterForm = () => {
  console.log("Произошла отправка, тут можно писать любые действия");
};

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
];

const rulesCallbackForm = [
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
];

const rulesBuyForm = [
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
  /*{
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
  },*/
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
    ruleSelector: ".input-company",
    mailError: "Введите корректное сообщение",
    rules: [
      {
        rule: "required",
        errorMessage: "Напишите название компании",
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
    ruleSelector: ".input-checkbox-confirm",
    checkboxError: "Нужно поставить галочку",
    rules: [
      {
        rule: "required",
        errorMessage: "Нужно согласиться с условиями",
      },
    ],
  },
];

validateForms("#footer-form", rulesFooterForm, afterForm);
validateForms("#contacts-form", rulesContactsForm, afterForm);
validateForms("#contacts-form-mobile", rulesContactsForm, afterForm);
validateForms("#leasing-page-form", rulesContactsForm, afterForm);

//popups
validateForms("#write-us-popup-form", rulesContactsForm, afterForm);
validateForms("#callback-popup-form", rulesCallbackForm, afterForm);
validateForms("#buy-form", rulesBuyForm, afterForm);
validateForms("#parts-popup-form", rulesBuyForm, afterForm);
validateForms("#parts-requests-popup-form", rulesBuyForm, afterForm);
