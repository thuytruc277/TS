

document.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splash");
  const wrap = document.getElementById("wrap");

  // Timeline for the animation
  const timeline = gsap.timeline();

  // Step 1: Animate logo parts to the center
  timeline
    .to(".part1", { x: -200, y: 0, opacity: 1, duration: 1, ease: "power2.out" })
    .to(".part2", { x: -200, y: 0, opacity: 1, duration: 1, ease: "power2.out" }, "-=0.8")
    .to(".part3", { x: -200, y: 0, opacity: 1, duration: 1, ease: "power2.out" }, "-=0.8")
    .to(".part4", { x: -200, y: 0, opacity: 1, duration: 1, ease: "power2.out" }, "-=0.8")
    .to(".part5", { x: -200, y: 0, opacity: 1, duration: 1, ease: "power2.out" }, "-=0.8")


    // Step 2: Move logo to the top-left corner and fade out
    .to(".logo-part", {
      x: "-750px",
      y: "-350px",
      opacity: 0,
      duration: 1.5,
      ease: "power2.inOut",
    })

    // Step 3: Fade out the gradient background
    .to("#splash", {
      background: "linear-gradient(180deg, #074799, #E1FFBB, #29ADB2, #F3F3F3)",
      duration: 0.5,
      ease: "power4.inOut",
    }, "-=1")

    // Step 4: Hide splash screen and reveal main page
    .to("#splash", { display: "none", duration: 0 })
    .to("#wrap", { visibility: "visible", opacity: 1, duration: 0, ease: "power4.in" });


});







/* 1 - BANNER slide */
const banner_list = new Swiper('.banner_list', {
  parallax: true,
  loop: true,
  speed: 2000,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



/* 2 - REVIEW slide */

const review_list = new Swiper('.review_list', {
  speed: 1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  effect: "cards",
  grabCursor: true,
});



document.addEventListener("DOMContentLoaded", () => {
  ScrollTrigger.matchMedia({
    // Khi màn hình lớn hơn hoặc bằng 1080px
    "(min-width: 1080px)": function () {
      // Chạy hiệu ứng cho video_txt
      gsap.to(".video_txt", {
        y: 250,
        duration: 3,
        scrollTrigger: {
          trigger: ".video_txt",
          start: "top 55%",
          /*  markers: true, */
          scrub: 3,
        },
      });
    },

    // Khi màn hình nhỏ hơn 1080px
    "(max-width: 1079px)": function () {
      console.log("Hiệu ứng đã tắt trên màn hình nhỏ hơn 1080px");
      // Không áp dụng bất kỳ hiệu ứng nào cho video_txt
    },
  });
});




/* document.addEventListener("DOMContentLoaded", () => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".namebg",
      start: "top 70%",
      end: "+=600",    
      scrub: 3,        
    }
  });

  timeline.to(".namebg", {
    scale: 1,
    x: -10,
    y: 50,
    opacity: 1,
    duration: 2
  });

  timeline.to(".namebg", {
    x: -10,
    y: 100,
    duration: 1
  });

  timeline.to(".namebg", {
    x: -10,
    y: 150,
    duration: 2
  });

}); */




/* SECTION 4 - line*/

document.addEventListener("DOMContentLoaded", () => {
  let svg = document.querySelector("svg");
  let path = svg.querySelector("path");

  const pathLength = path.getTotalLength();

  // Thiết lập ban đầu
  gsap.set(path, {
    strokeDasharray: pathLength,
    strokeDashoffset: pathLength,
  });

  // Tạo hiệu ứng xuất hiện
  gsap.fromTo(
    path,
    { strokeDashoffset: pathLength }, // Bắt đầu từ cuối đường path
    {
      strokeDashoffset: 0, // Kết thúc khi hiển thị đầy đủ
      scrollTrigger: {
        trigger: ".svg-container",
        start: "top 75%", // Bắt đầu hiệu ứng khi .svg-container chạm 75% viewport
        end: "bottom 45%",
        duration: 3,
        scrub: 3,
      },
    }
  );
});








/* BALL 2 */
document.addEventListener("DOMContentLoaded", () => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".ball2",
      start: "top 90%",
      end: "bottom 30%",
      scrub: 3,
    }
  });

  timeline.to(".ball2", {
    scale: 1,
    opacity: 1,
    duration: 2
  });

  timeline.to(".ball2", {
    scale: 2,
    duration: 2
  });

  timeline.to(".ball2", {
    scale: 1,
    duration: 2
  });
});

/* BALL 3 */
document.addEventListener("DOMContentLoaded", () => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".ball3",
      start: "top 90%",
      end: "bottom 30%",
      scrub: 1,
    }
  });

  timeline.to(".ball3", {
    scale: 2,
    opacity: 1,
    duration: 2
  });

  timeline.to(".ball3", {
    scale: 1,
    duration: 2
  });
});

/* BALL 4 */
document.addEventListener("DOMContentLoaded", () => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".ball4",
      start: "top 95%",
      end: "bottom 30%",
      scrub: 1,
    }
  });

  timeline.to(".ball4", {
    scale: 2,
    opacity: 1,
    duration: 2
  });

  timeline.to(".ball4", {
    scale: 1,
    duration: 2
  });
});

/* BALL 5 */
document.addEventListener("DOMContentLoaded", () => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".ball5",
      start: "top 90%",
      end: "bottom 30%",
      scrub: 1,
    }
  });

  timeline.to(".ball5", {
    scale: 2,
    opacity: 1,
    duration: 2
  });

  timeline.to(".ball5", {
    scale: 1,
    duration: 2
  });
});













/* Img 1 */
document.addEventListener("DOMContentLoaded", () => {
  ScrollTrigger.matchMedia({
    // Điều kiện cho màn hình lớn hơn hoặc bằng 1300px
    "(min-width: 1300px)": function () {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".img1",
          start: "top 90%",
          end: "bottom 20%",
          scrub: 0.2,
        },
      });

      timeline.to(".img1", {
        scale: 1,
        opacity: 1,
        duration: 0.2,
      });

      timeline.to(".img1", {
        scale: 1,
        x: 50,
        opacity: 1,
        duration: 0,
      });

    },

    // Điều kiện cho màn hình nhỏ hơn 1300px
    "(max-width: 1299px)": function () {
      // Không làm gì cả, hiệu ứng không được kích hoạt
      console.log("Scroll animation for '.img1' disabled on screens smaller than 1300px.");
    },
  });
});


/* Img 2 */
document.addEventListener("DOMContentLoaded", () => {
  ScrollTrigger.matchMedia({
    // Điều kiện cho màn hình lớn hơn hoặc bằng 1300px
    "(min-width: 1300px)": function () {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".img2",
          start: "top 90%",
          end: "bottom 20%",
          scrub: 0.2,
        },
      });

      timeline.to(".img2", {
        scale: 1,
        x: -50,
        opacity: 1,
        duration: 0.3,
      });

    },

    // Điều kiện cho màn hình nhỏ hơn 1300px
    "(max-width: 1299px)": function () {
      // Không làm gì cả, đoạn mã không được kích hoạt
      console.log("Scroll animation for '.img2' disabled on smaller screens.");
    },
  });
});


/* Img 3 */
document.addEventListener("DOMContentLoaded", () => {
  ScrollTrigger.matchMedia({
    // Điều kiện cho màn hình lớn hơn hoặc bằng 1200px
    "(min-width: 1300px)": function () {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".img3",
          start: "top 90%",
          end: "bottom 20%",
          scrub: 0.2,
        },
      });

      timeline.to(".img3", {
        scale: 1,
        opacity: 1,
        duration: 0.2,
      });

    },

    // Điều kiện cho màn hình nhỏ hơn 1200px
    "(max-width: 1299px)": function () {
      // Không làm gì cả, đoạn mã sẽ không được kích hoạt
      console.log("Scroll animation disabled on smaller screens.");
    },
  });
});





document.addEventListener("DOMContentLoaded", () => {
  const spans = [
    { selector: ".span1", scaleStart: 0.7, duration: 0.3 },
    { selector: ".span2", scaleStart: 1.3, duration: 0.5 },
    { selector: ".span3", scaleStart: 0.7, duration: 0.7 },
    { selector: ".span4", scaleStart: 1.3, duration: 0.9 },
    { selector: ".span5", scaleStart: 0.7, duration: 1.1 },
    { selector: ".span6", scaleStart: 1.3, duration: 1.3 },
  ];

  spans.forEach((span) => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: span.selector,
        start: "top 90%",
        end: "bottom 40%",
        scrub: 3,
      },
    });

    timeline.to(span.selector, {
      y: 50,
      opacity: 1,
      scale: span.scaleStart,
      duration: span.duration,
    });

    timeline.to(span.selector, {
      y: 70,
      scale: 1,
      duration: span.duration,
    });
  });
});




// Đăng ký ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
// Lấy danh sách các khung chứa ảnh
const images = document.querySelectorAll('.image');
// Áp dụng hiệu ứng cho từng ảnh
images.forEach((image) => {
  gsap.to(image, {
    x: 0,
    scale: 1.2,
    y: -70,
    scrollTrigger: {
      trigger: image.parentElement,
      start: "top 60%",
      end: "bottom 70%",
      scrub: 1,
    },
  });
});