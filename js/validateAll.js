$(function () {
  var link = location.href;
  var a = link.indexOf("/en/");
  //add method validate password
  $.validator.addMethod(
    "validatePassword",
    function (value, element) {
      return (
        this.optional(element) ||
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/i.test(value)
      );
    },
    "Hãy nhập password từ 8 đến 16 ký tự bao gồm chữ hoa, chữ thường và ít nhất một chữ số"
  );

  // validate số điện thoại bắt đầu là chữ số 0 hoặc 84
  /^(0|\+?84|0084)\d{9,10}$/;

  if (a > 0) {
    $("#vContact__form").validate({
      rules: {
        name: "required",

        phone: {
          required: true,
          rangelength: [10, 11],
          number: true,
        },
        email: {
          required: true,
          email: true,
        },
        content: {
          required: true,
        },
      },
      messages: {
        name: "Please enter Your name",
        phone: {
          required: "Please enter Your phone",
          rangelength: "Phone has 10 or 11 numbers",
          number: "Please enter numbers",
        },
        email: {
          required: "Please enter Email",
          email: "Email not true",
        },
        content: {
          required: "Please enter something",
        },
      },
    });
  } else {
    $("#vContact__form").validate({
      rules: {
        name: "required",

        phone: {
          required: true,
          rangelength: [10, 11],
          number: true,
        },
        email: {
          required: true,
          email: true,
        },
        content: {
          required: true,
        },
      },
      messages: {
        name: "Vui lòng nhập tên",
        phone: {
          required: "Vui lòng nhập số điện thoại",
          rangelength: "Điện thoại có 10 hoặc 11 số",
          number: "Vui lòng nhập số",
        },
        email: {
          required: "Vui lòng nhập email",
          email: "Định dạng email không đúng",
        },
        content: {
          required: "Vui lòng nhập nội dung",
        },
      },
    });
  }

  // show popUp thông báo
  $("#vContact__form").submit(function (e) {
    e.preventDefault();
    if ($(this).valid()) {
      $(".popUp").css("display", "flex");
    }
  });

  // bấm nút OK của popUp để tắt thông báo và bỏ các trường đã gõ vào input
  $(".button-popUp").click(function () {
    location.reload();
  });
});
