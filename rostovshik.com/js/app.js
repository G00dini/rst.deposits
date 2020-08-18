const defaultInputPeriod = 4;
const defaultInputSum = 10000;
const start_percent = 25;
const bonus_percent = 15;

var depositAmountInNum = $("#depositAmountInputNum");
var depositAmountInRange = $("#depositAmountInputRange");

var depositPeriodInNum = $("#depositPeriodInputNum");
var depositPeriodInRange = $("#depositPeriodInputRange");

var depositMonthIncome = $("#depositMonthIncome");
var depositFullIncome = $("#depositFullIncome");

var depositMonthIncomePercentHelp = $("#MonthIncomeHelp span");
var depositFullIncomePercentHelp = $("#FullIncomeHelp span");

var depositMonthIncomePercent = $('#depositMonthIncomePercent');
var depositFullIncomePercent = $('#depositFullIncomePercent');
var specialPercent = $('#specialPercent');

// Document Ready
document.addEventListener("DOMContentLoaded", function () {
  // Asesstment Slider
var assessment_slider = new Swiper("#assessment-slider", {
  slidesPerView: 1,
  spaceBetween: 70,
  //effect: 'fade',
  loop: true,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

// Main Slider
var slider = new Swiper("#slider .swiper-container", {
  slidesPerView: 1,
  spaceBetween: 0,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  loop: true,
});

// Reviews Slider
var reviews_slider = new Swiper("#reviews-slider", {
  //slidesPerView: 1,
  //spaceBetween: 70,
  //effect: 'fade',
  autoHeight: true,
  loop: true,
  //speed: 1000,
  navigation: {
    nextEl: ".swiper-next-review",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

// Reviews Link Slider
var reviews_link_slider = new Swiper("#reviews-link-slider", {
  slidesPerView: 6,
  //effect: 'fade',
  //centeredSlides: true,
  loop: true,
  speed: 500,
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});
;
  var tag = document.createElement("script");
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player("ytplayer", {
    height: "600",
    width: "100%",
    videoId: "tWXcwui4YOA",
    playerVars: {
      controls: 0,
      //autoplay: 1,
      modestbranding: 1,
    },
  });
}

var popupVideoLinks = document.querySelectorAll(".js-trigger-video-modal");
var ytVideoFrame = document.querySelector("#yt-video-frame");
var videoModal = document.querySelector(".video-modal");
var body = document.querySelector("body");

if (popupVideoLinks.length > 0) {
  for (let i = 0; i < popupVideoLinks.length; i++) {
    const popupVideoLink = popupVideoLinks[i];
    popupVideoLink.addEventListener("click", function (e) {
      e.preventDefault();
      var id = this.getAttribute("data-youtube-id");
      var autoplay = "?autoplay=1";
      var related_no = "&rel=0";
      var srcVideo = "//www.youtube.com/embed/" + id + autoplay + related_no;
      ytVideoFrame.setAttribute("src", srcVideo);
      //videoModal.classList.add("show");
      arr = videoModal.className.split(" ");
      if (arr.indexOf("show") == -1) {
        videoModal.className += " " + "show";
      }
      if (body.className.split(" ").indexOf("noscroll") == -1) {
        body.className += " " + "noscroll";
      }
    });
  }
}

[document.querySelector(".close-video-modal"), document.querySelector(".video-modal .overlay")].forEach((item) => {
  item.addEventListener("click", function (e) {
    closeVideoModal();
  });
});

document.querySelector("body").addEventListener("keyup", function (e) {
  if (e.keyCode == 27) {
    closeVideoModal();
  }
});

function toggleVideoModal() {}

function closeVideoModal() {
  event.preventDefault();
  videoModal.classList.remove("show");
  body.classList.remove("noscroll");
  ytVideoFrame.setAttribute("src", "");
}
;
  var contactCityLinks = document.querySelectorAll("#DropdownContactsMenu li a");
var dropdownContactsBtn = document.querySelector(".btn-dropdown-contacts");

if (contactCityLinks.length > 1) {
  for (let i = 0; i < contactCityLinks.length; i++) {
    const contactCityLink = contactCityLinks[i];
    contactCityLink.addEventListener("click", function (e) {
      let city = this.textContent;
      var contactsBtnContent = dropdownContactsBtn.innerHTML.split(" ");
      contactsBtnContent[0] = city;
      dropdownContactsBtn.innerHTML = contactsBtnContent.join(" ");
    });
  }
}
;

  $('.get-consult-form input[name="phone"]').inputmask();
  $('.deposit-calc-form input[name="phone"]').inputmask();
  $('.open-deposit-form input[name="phone"]').inputmask();
  $('.rates-calc-form input[name="phone"]').inputmask();
  $('.contact-us-form input[name="phone"]').inputmask();

  $(document).on("click", 'a[href^="#"]:not(".dropdown-menu__link")', function (e) {
    e.preventDefault();
    $("body, html").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      500
    );
  });

  //
;

  $(document).on("input", "#depositAmountInputNum, #depositAmountInputRange, #depositPeriodInputNum, #depositPeriodInputRange", function (e) {
    switch (e.currentTarget.id) {
      case "depositAmountInputNum":
        if ($(e.currentTarget).val()) {
          if (depositAmountInputRange.nextElementSibling.className == "input-type-range") {
            var inputTypeRange = depositAmountInputRange.nextElementSibling;

            var inputTypeRangeThumb = inputTypeRange.querySelectorAll(".input-type-range-thumb")[0];
            var min = depositAmountInputRange.getAttribute("min");
            min = min === null ? 0 : parseFloat(min);
            var max = depositAmountInputRange.getAttribute("max");
            max = max === null ? 100 : parseFloat(max);

            var update = function () {
              console.log(e.currentTarget.value);
              let value = parseFloat(e.currentTarget.value);
              let percent = Math.round((10000 * (value - min)) / (max - min) / 100);
              inputTypeRangeThumb.style.width = String(percent) + "%";
            };

            update();
            updateResults();
          } else {
            return;
          }
        }
        break;
      case "depositAmountInputRange":
        if ($(e.currentTarget).val()) {
          depositAmountInNum.val($(e.currentTarget).val());
          updateResults();
        }
        break;
      case "depositPeriodInputNum":
        if ($(e.currentTarget).val()) {
          depositPeriodInRange.val($(e.currentTarget).val());
          updateResults();
        }
        break;
      case "depositPeriodInputRange":
        if ($(e.currentTarget).val()) {
          switch ($(e.currentTarget).val()) {
            case "1":
              depositPeriodInNum.val(1);
              break;
            case "2":
              depositPeriodInNum.val(3);
              break;
            case "3":
              depositPeriodInNum.val(6);
              break;
            case "4":
              depositPeriodInNum.val(12);
              break;
            case "5":
              depositPeriodInNum.val(18);
              break;
            default:
              break;
          }
          updateResults();
        }
        break;
      default:
        break;
    }
  });

  $('#EarlyDissolution').on('click', function() {
    updateResults();
  });

  $(document).on('change', '#rates-calc-form input[name="sumValue"], #rates-calc-form input[name="periodMonth"]', function(e) {
    //console.log(e.currentTarget.id);
    updatePercents();
  });

  inputCalcRanges();
  updateResults();
  updatePercents();

  $(document).on("af_complete", function (event, response) {
    var form = response.form;
    console.log(response);
    if (response.success) {
      switch (form.attr("id")) {
        case "getConsultform":
          $("#getConsult").modal("hide");
          ga(
            "send",
            "event",
            "Consult Form",
            "Submit",
            "Consult Form Submit"
          );
          break;
        case "deposit-calc-form":
          $("#openDepositCalcModal").modal("hide");
          ga(
            "send",
            "event",
            "Open Deposit Form",
            "Submit",
            "Open Deposit Calc Form Submit"
          );
          break;
        case "openDepositForm":
          $("#openDepositModal").modal("hide");
          ga(
            "send",
            "event",
            "Open Deposit Form",
            "Submit",
            "Open Deposit Form Submit"
          );
          break;
        case "rates-calc-form":
          $("#openDepositRatesModal").modal("hide");
          ga(
            "send",
            "event",
            "Open Deposit Rates Form",
            "Submit",
            "Open Deposit Rates Form Submit"
          );
          break;
        case "contact-us-form":
          $("#ContactUsModal").modal("hide");
          ga(
            "send",
            "event",
            "ContactUs Form",
            "Submit",
            "ContactUs Form Submit"
          );
          break;
        default:
          break;
      }
    } else {
    }
  });
});

function updateResults() {
  var depositPeriod = depositPeriodInNum.val();
  switch (depositPeriod) {
    case "1":
      var percentage = 9;
      depositMonthIncome.val(((+Number(depositAmountInNum.val()) * percentage / 100) / 12).toFixed(0));
      depositMonthIncomePercentHelp.html((+Number(percentage) / 100 / 12 * 100).toFixed(2));
      depositFullIncome.val((((+Number(depositAmountInNum.val()) * percentage / 100) / 12) * Number(depositPeriod)).toFixed(0));
      depositFullIncomePercentHelp.html((+Number(percentage) / 100 * depositPeriodInNum.val() / 12 * 100).toFixed(2));
      break;
    case "3":
      if (depositAmountInNum.val() < 50000) {
        var percentage = 12;
        depositMonthIncome.val(((+Number(depositAmountInNum.val()) * percentage / 100) / 12).toFixed(0));
        depositMonthIncomePercentHelp.html((+Number(percentage) / 100 / 12 * 100).toFixed(2));
        depositFullIncome.val((((+Number(depositAmountInNum.val()) * percentage / 100) / 12) * Number(depositPeriod)).toFixed(0));
        depositFullIncomePercentHelp.html((+Number(percentage) / 100 * depositPeriodInNum.val() / 12 * 100).toFixed(2));
      } else {
        var percentage = 15;
        depositMonthIncome.val(((+Number(depositAmountInNum.val()) * percentage / 100) / 12).toFixed(0));
        depositMonthIncomePercentHelp.html((+Number(percentage) / 100 / 12 * 100).toFixed(2));
        depositFullIncome.val((((+Number(depositAmountInNum.val()) * percentage / 100) / 12) * Number(depositPeriod)).toFixed(0));
        depositFullIncomePercentHelp.html((+Number(percentage) / 100 * depositPeriodInNum.val() / 12 * 100).toFixed(2));
      }
      break;
    case "6":
      if ($('#EarlyDissolution:checked').length > 0) {
        if (depositAmountInNum.val() < 50000) {
          var percentage = start_percent;
          percentage += bonus_percent;
          depositMonthIncome.val(((+Number(depositAmountInNum.val()) * percentage / 100) / 12).toFixed(0));
          depositMonthIncomePercentHelp.html((+Number(percentage) / 100 / 12 * 100).toFixed(2));
          depositFullIncome.val((((+Number(depositAmountInNum.val()) * percentage / 100) / 12) * Number(depositPeriod)).toFixed(0));
          depositFullIncomePercentHelp.html((+Number(percentage) / 100 * depositPeriodInNum.val() / 12 * 100).toFixed(2));
        } else {
          var percentage = start_percent + 2;
          percentage += bonus_percent;
          depositMonthIncome.val(((+Number(depositAmountInNum.val()) * percentage / 100) / 12).toFixed(0));
          depositMonthIncomePercentHelp.html((+Number(percentage) / 100 / 12 * 100).toFixed(2));
          depositFullIncome.val((((+Number(depositAmountInNum.val()) * percentage / 100) / 12) * Number(depositPeriod)).toFixed(0));
          depositFullIncomePercentHelp.html((+Number(percentage) / 100 * depositPeriodInNum.val() / 12 * 100).toFixed(2));
        }
      } else {
        if (depositAmountInNum.val() < 50000) {
          var percentage = start_percent + 1;
          percentage += bonus_percent;
          depositMonthIncome.val(((+Number(depositAmountInNum.val()) * percentage / 100) / 12).toFixed(0));
          depositMonthIncomePercentHelp.html((+Number(percentage) / 100 / 12 * 100).toFixed(2));
          depositFullIncome.val((((+Number(depositAmountInNum.val()) * percentage / 100) / 12) * Number(depositPeriod)).toFixed(0));
          depositFullIncomePercentHelp.html((+Number(percentage) / 100 * depositPeriodInNum.val() / 12 * 100).toFixed(2));
        } else {
          var percentage = start_percent + 3;
          percentage += bonus_percent;
          depositMonthIncome.val(((+Number(depositAmountInNum.val()) * percentage / 100) / 12).toFixed(0));
          depositMonthIncomePercentHelp.html((+Number(percentage) / 100 / 12 * 100).toFixed(2));
          depositFullIncome.val((((+Number(depositAmountInNum.val()) * percentage / 100) / 12) * Number(depositPeriod)).toFixed(0));
          depositFullIncomePercentHelp.html((+Number(percentage) / 100 * depositPeriodInNum.val() / 12 * 100).toFixed(2));
        }
      } 
      break;
    case "12":
      if ($('#EarlyDissolution:checked').length > 0) {
        if (depositAmountInNum.val() < 50000) {
          var percentage = start_percent + 4;
          percentage += bonus_percent;
          depositMonthIncome.val(((+Number(depositAmountInNum.val()) * percentage / 100) / 12).toFixed(0));
          depositMonthIncomePercentHelp.html((+Number(percentage) / 100 / 12 * 100).toFixed(2));
          depositFullIncome.val((((+Number(depositAmountInNum.val()) * percentage / 100) / 12) * Number(depositPeriod)).toFixed(0));
          depositFullIncomePercentHelp.html((+Number(percentage) / 100 * depositPeriodInNum.val() / 12 * 100).toFixed(2));
        } else {
          var percentage = start_percent + 6;
          percentage += bonus_percent;
          depositMonthIncome.val(((+Number(depositAmountInNum.val()) * percentage / 100) / 12).toFixed(0));
          depositMonthIncomePercentHelp.html((+Number(percentage) / 100 / 12 * 100).toFixed(2));
          depositFullIncome.val((((+Number(depositAmountInNum.val()) * percentage / 100) / 12) * Number(depositPeriod)).toFixed(0));
          depositFullIncomePercentHelp.html((+Number(percentage) / 100 * depositPeriodInNum.val() / 12 * 100).toFixed(2));
        }
      } else {
        if (depositAmountInNum.val() < 50000) {
          var percentage = start_percent + 5;
          percentage += bonus_percent;
          depositMonthIncome.val(((+Number(depositAmountInNum.val()) * percentage / 100) / 12).toFixed(0));
          depositMonthIncomePercentHelp.html((+Number(percentage) / 100 / 12 * 100).toFixed(2));
          depositFullIncome.val((((+Number(depositAmountInNum.val()) * percentage / 100) / 12) * Number(depositPeriod)).toFixed(0));
          depositFullIncomePercentHelp.html((+Number(percentage) / 100 * depositPeriodInNum.val() / 12 * 100).toFixed(2));
        } else {
          var percentage = start_percent + 7;
          percentage += bonus_percent;
          depositMonthIncome.val(((+Number(depositAmountInNum.val()) * percentage / 100) / 12).toFixed(0));
          depositMonthIncomePercentHelp.html((+Number(percentage) / 100 / 12 * 100).toFixed(2));
          depositFullIncome.val((((+Number(depositAmountInNum.val()) * percentage / 100) / 12) * Number(depositPeriod)).toFixed(0));
          depositFullIncomePercentHelp.html((+Number(percentage) / 100 * depositPeriodInNum.val() / 12 * 100).toFixed(2));
        }
      }
      break;
    case "18":
      if ($('#EarlyDissolution:checked').length > 0) {
        if (depositAmountInNum.val() < 50000) {
          var percentage = start_percent + 8;
          percentage += bonus_percent;
          depositMonthIncome.val(((+Number(depositAmountInNum.val()) * percentage / 100) / 12).toFixed(0));
          depositMonthIncomePercentHelp.html((+Number(percentage) / 100 / 12 * 100).toFixed(2));
          depositFullIncome.val((((+Number(depositAmountInNum.val()) * percentage / 100) / 12) * Number(depositPeriod)).toFixed(0));
          depositFullIncomePercentHelp.html((+Number(percentage) / 100 * depositPeriodInNum.val() / 12 * 100).toFixed(2));
        } else {
          var percentage = start_percent + 10;
          percentage += bonus_percent;
          depositMonthIncome.val(((+Number(depositAmountInNum.val()) * percentage / 100) / 12).toFixed(0));
          depositMonthIncomePercentHelp.html((+Number(percentage) / 100 / 12 * 100).toFixed(2));
          depositFullIncome.val((((+Number(depositAmountInNum.val()) * percentage / 100) / 12) * Number(depositPeriod)).toFixed(0));
          depositFullIncomePercentHelp.html((+Number(percentage) / 100 * depositPeriodInNum.val() / 12 * 100).toFixed(2));
        }
      } else {
        if (depositAmountInNum.val() < 50000) {
          var percentage = start_percent + 9;
          percentage += bonus_percent;
          depositMonthIncome.val(((+Number(depositAmountInNum.val()) * percentage / 100) / 12).toFixed(0));
          depositMonthIncomePercentHelp.html((+Number(percentage) / 100 / 12 * 100).toFixed(2));
          depositFullIncome.val((((+Number(depositAmountInNum.val()) * percentage / 100) / 12) * Number(depositPeriod)).toFixed(0));
          depositFullIncomePercentHelp.html((+Number(percentage) / 100 * depositPeriodInNum.val() / 12 * 100).toFixed(2));
        } else {
          var percentage = start_percent + 11;
          percentage += bonus_percent;
          depositMonthIncome.val(((+Number(depositAmountInNum.val()) * percentage / 100) / 12).toFixed(0));
          depositMonthIncomePercentHelp.html((+Number(percentage) / 100 / 12 * 100).toFixed(2));
          depositFullIncome.val((((+Number(depositAmountInNum.val()) * percentage / 100) / 12) * Number(depositPeriod)).toFixed(0));
          depositFullIncomePercentHelp.html((+Number(percentage) / 100 * depositPeriodInNum.val() / 12 * 100).toFixed(2));
        }
      }
      break;
    default:
      break;
  }
}

function updatePercents() {
  var periodMonth = $('#rates-calc-form input[name="periodMonth"]:checked').val();
  //console.log(periodMonth);
  var sumValue = $('#rates-calc-form input[name="sumValue"]:checked').val();
  //console.log(sumValue);
  if (sumValue == 50000) {
    switch (periodMonth) {
      case "1":
        depositMonthIncomePercent.val('9%');
        depositFullIncomePercent.val('9%');
        specialPercent.val('-');
        break;
      case "3":
        depositMonthIncomePercent.val('12%');
        depositFullIncomePercent.val('12%');
        specialPercent.val('-');
        break;
      case "6":
        depositMonthIncomePercent.val('25%');
        depositFullIncomePercent.val('26%');
        specialPercent.val('+15%*');
        break;
      case "12":
        depositMonthIncomePercent.val('29%');
        depositFullIncomePercent.val('30%');
        specialPercent.val('+15%*');
        break;
      case "18":
        depositMonthIncomePercent.val('33%');
        depositFullIncomePercent.val('34%');
        specialPercent.val('+15%*');
        break;
      default:
        break;
    }
  } else {
    switch (periodMonth) {
      case "1":
        depositMonthIncomePercent.val('9%');
        depositFullIncomePercent.val('9%');
        specialPercent.val('-');
        break;
      case "3":
        depositMonthIncomePercent.val('15%');
        depositFullIncomePercent.val('15%');
        specialPercent.val('-');
        break;
      case "6":
        depositMonthIncomePercent.val('27%');
        depositFullIncomePercent.val('28%');
        specialPercent.val('+15%*');
        break;
      case "12":
        depositMonthIncomePercent.val('31%');
        depositFullIncomePercent.val('32%');
        specialPercent.val('+15%*');
        break;
      case "18":
        depositMonthIncomePercent.val('35%');
        depositFullIncomePercent.val('36%');
        specialPercent.val('+15%*');
        break;
      default:
        break;
    }
  }
}

var inputCalcRanges = function () {
  let elms = document.querySelectorAll('input[type="range"]');
  for (let i = 0; i < elms.length; i++) {
    inputCalcRange(elms[i]);
  }
};

var inputCalcRange = function (elm) {
  elm.className += elm.className != "" ? " transparent" : "transparent";
  var inputTypeRange = document.createElement("div");
  inputTypeRange.className = "input-type-range";
  inputTypeRange.innerHTML = '<div class="input-type-range-track"><div class="input-type-range-thumb-container"><div class="input-type-range-thumb"></div></div></div><div class="input-type-range-delimiter"></div><div class="input-type-range-delimiter"></div>';
  if (elm.nextElementSibling === null) {
    elm.parentNode.appendChild(inputTypeRange);
  } else {
    elm.parentNode.insertBefore(inputTypeRange, elm.nextElementSibling);
  }

  var inputTypeRangeThumb = inputTypeRange.querySelectorAll(".input-type-range-thumb")[0];
  var min = elm.getAttribute("min");
  min = min === null ? 0 : parseFloat(min);
  var max = elm.getAttribute("max");
  max = max === null ? 100 : parseFloat(max);

  var update = function () {
    let value = parseFloat(elm.value);
    let percent = Math.round((10000 * (value - min)) / (max - min) / 100);
    inputTypeRangeThumb.style.width = String(percent) + "%";
  };

  elm.addEventListener("input", function () {
    update();
  });
  update();
};

// Webp CSS Support
function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

//# sourceMappingURL=app.js.map
