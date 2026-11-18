// 모션 설정 확인
const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

// ABOUT 페이지 좌석 슬라이드
const seatingGallery = document.querySelector(".seating-gallery");

if (seatingGallery && typeof Swiper !== "undefined") {
  new Swiper(".seating-gallery", {
    slidesPerView: 1.05,
    spaceBetween: 16,
    speed: reducedMotion ? 0 : 600,
    freeMode: {
      enabled: true,
      sticky: false,
    },
    scrollbar: {
      el: ".seating-gallery .swiper-scrollbar",
      draggable: true,
    },
    breakpoints: {
      600: {
        slidesPerView: 1.8,
        spaceBetween: 20,
      },
      900: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });
}

// AOS 애니메이션
if (typeof AOS !== "undefined") {
  AOS.init({
    once: false,
    mirror: true,
    offset: 120,
    duration: 700,
    easing: "ease-out-cubic",
    disable: reducedMotion,
  });
}

// 첫 화면과 소개 화면 사이를 부드럽게 이동한다.
const homeHero = document.querySelector(".hero");
const homeIntro = document.querySelector(".home-intro");

if (homeHero && homeIntro && !reducedMotion) {
  const root = document.documentElement;
  const scrollDuration = 1100;
  let scrollFrame = 0;
  let activeScrollTarget = null;
  let originalScrollBehavior = "";
  let originalScrollSnapType = "";

  const getSnapPosition = (section) => {
    const scrollPaddingTop =
      parseFloat(getComputedStyle(root).scrollPaddingTop) || 0;
    return (
      section.getBoundingClientRect().top + window.scrollY - scrollPaddingTop
    );
  };

  const scrollToSection = (target) => {
    if (scrollFrame) {
      cancelAnimationFrame(scrollFrame);
    } else {
      originalScrollBehavior = root.style.scrollBehavior;
      originalScrollSnapType = root.style.scrollSnapType;
      root.style.scrollBehavior = "auto";
      root.style.scrollSnapType = "none";
    }

    activeScrollTarget = target;
    const startPosition = window.scrollY;
    const startTime = performance.now();

    const animateScroll = (time) => {
      const progress = Math.min((time - startTime) / scrollDuration, 1);
      const easedProgress =
        progress < 0.5
          ? 4 * progress ** 3
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(
        0,
        startPosition + (target - startPosition) * easedProgress,
      );

      if (progress < 1) {
        scrollFrame = requestAnimationFrame(animateScroll);
        return;
      }

      window.scrollTo(0, target);
      scrollFrame = 0;
      activeScrollTarget = null;
      root.style.scrollBehavior = originalScrollBehavior;
      root.style.scrollSnapType = originalScrollSnapType;
    };

    scrollFrame = requestAnimationFrame(animateScroll);
  };

  window.addEventListener(
    "wheel",
    (event) => {
      if (event.deltaY === 0) return;

      const heroPosition = getSnapPosition(homeHero);
      const introPosition = getSnapPosition(homeIntro);
      let target = null;

      if (activeScrollTarget !== null) {
        event.preventDefault();
        target = event.deltaY > 0 ? introPosition : heroPosition;
        if (target !== activeScrollTarget) {
          scrollToSection(target);
        }
        return;
      }

      if (event.deltaY > 0 && window.scrollY < introPosition - 1) {
        target = introPosition;
      } else if (event.deltaY < 0 && window.scrollY > heroPosition + 1) {
        target = heroPosition;
      }

      if (target === null) return;

      event.preventDefault();
      scrollToSection(target);
    },
    { passive: false },
  );
}

// 오늘 날짜 이전에는 방문 날짜 선택 불가
const dateInput = document.getElementById("date");

if (dateInput) {
  const today = new Date();

  const minDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  dateInput.min = minDate;
}

// EmailJS 문의 전송
const contactForm = document.getElementById("contact-form");

if (contactForm && typeof emailjs !== "undefined") {
  emailjs.init({
    publicKey: "xMGlQs2E8acu-dfd0",
  });

  const submitBtn = document.getElementById("submit-btn");
  const formStatus = document.getElementById("form-status");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    submitBtn.disabled = true;
    submitBtn.textContent = "전송 중...";
    formStatus.textContent = "";

    emailjs
      .sendForm("service_0tepeim", "template_1wuti5g", contactForm)
      .then(function () {
        formStatus.textContent = "문의가 정상적으로 전송되었습니다.";
        contactForm.reset();
      })
      .catch(function (error) {
        console.error("EmailJS 전송 오류:", error);

        formStatus.textContent =
          "전송에 실패했습니다. 잠시 후 다시 시도해주세요.";
      })
      .finally(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = "문의 내용 제출";
      });
  });
}

// AOS 애니메이션
if (typeof AOS !== "undefined") {
  AOS.init({
    once: false,
    mirror: true,
    offset: 120,
    duration: 700,
    easing: "ease-out-cubic",
    disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  });
}

// HOME 페이지 메인 이미지 슬라이드
const heroSwiper = document.querySelector(".hero-swiper");

if (heroSwiper && typeof Swiper !== "undefined") {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  new Swiper(".hero-swiper", {
    effect: "fade",
    fadeEffect: { crossFade: true },
    speed: reducedMotion ? 0 : 1000,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".hero-swiper .swiper-pagination",
      type: "progressbar",
    },
  });
}
