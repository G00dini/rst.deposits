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
  slidesPerView: 1,
  //spaceBetween: 70,
  //effect: 'fade',
  loop: true,
  //speed: 1000,
  navigation: {
    nextEl: ".swiper-next-review",
  },
  breakpoints: {
    320: {
      // slidesPerView: 1,
      spaceBetween: 0,
    },
    576: {
      spaceBetween: 30,
    },
    768: {
      spaceBetween: 50,
    },
    992: {
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

  const defaultInputPeriod = 4;
  const defaultInputSum = 10000;
  const start_percent = 0.25;
  const bonus_percent = 0.15;

  var depositAmountInNum = $("#depositAmountInputNum");
  var depositAmountInRange = $("#depositAmountInputRange");

  var depositPeriodInNum = $("#depositPeriodInputNum");
  var depositPeriodInRange = $("#depositPeriodInputRange");

  var depositMonthIncome = $("#depositMonthIncome");
  var depositFullIncome = $("#depositFullIncome");

  var depositMonthIncomePercent = $("#MonthIncomeHelp span");
  var depositFullIncomePercent = $("#FullIncomeHelp span");

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
          } else {
            return;
          }
        }
        break;
      case "depositAmountInputRange":
        if ($(e.currentTarget).val()) {
          depositAmountInNum.val($(e.currentTarget).val());
        }
        break;
      case "depositPeriodInputNum":
        if ($(e.currentTarget).val()) {
          depositPeriodInRange.val($(e.currentTarget).val());
        }
        break;
      case "depositPeriodInputRange":
        if ($(e.currentTarget).val()) {
          switch ($(e.currentTarget).val()) {
            case "1":
              depositPeriodInNum.val("1");
              depositMonthIncome.val((+Number(depositAmountInNum.val()) * 0.09) / 12);
              depositMonthIncomePercent.html();
              depositFullIncome.val(((+Number(depositAmountInNum.val()) * 0.09) / 12) * Number($(e.currentTarget).val()));
              depositFullIncomePercent.html();
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
        }
        break;
      default:
        break;
    }
  });

  inputCalcRanges();
});

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
