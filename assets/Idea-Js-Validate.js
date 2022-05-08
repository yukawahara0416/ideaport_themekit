const options = {
  rules: {
    "contact[name]": {
      required: true,
    },
    "contact[furigana]": {
      katakana: true,
    },
    "contact[email]": {
      required: true,
      email: true,
    },
    "contact[confirm]": {
      required: true,
      email: true,
      equalTo: "#ContactForm-email",
    },
    "contact[tel]": {
      phone: true,
    },
    "contact[comment]": {
      required: true,
    },
  },
  messages: {
    "contact[confirm]": {
      equalTo: "おなじメールアドレスを入力してください",
    },
  },

  // フォーム内容がValidだった場合のコールバック関数を指定
  submitHandler(form) {
    form.submit();
  },

  // フォーム内容がInvalidだった場合のコールバック関数を指定
  invalidHandler(form, validator) {
    $("#error").text("入力エラーが" + validator.numberOfInvalids() + "個あります");
  },
  ignore: ".ignore",
  debug: false,
  errorClass: "error",
  validClass: "valid",
  errorElement: "p",
  errorPlacement(err, element) {
    element.after(err);
  },
};

$(".js-idea-form").validate(options);
