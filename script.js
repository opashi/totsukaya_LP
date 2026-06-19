if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});

$('.slider').slick({
  autoplaySpeed: 3000,
  speed: 1000,
  autoplay: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<div class="slick-prev"></div>',
  nextArrow: '<div class="slick-next"></div>',
  dots: true,
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
});

$('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
  $('.slider').slick('slickPlay');
});

// ▼ スマホ・タブレット用タップイベント
document.querySelectorAll('.profile').forEach(card => {
  card.addEventListener('click', function () {

    // 他のカードが active の場合は解除
    document.querySelectorAll('.profile.active').forEach(activeCard => {
      if (activeCard !== this) {
        activeCard.classList.remove('active');
      }
    });

    // 自分をトグル
    this.classList.toggle('active');
  });
});

// ▼ スプラッシュスクリーン
$(window).on('load', function() {
  $('#splash').delay(1500).fadeOut('slow');
  $('#splash-logo').delay(1200).fadeOut('slow');
});

// PC版 Planの表示
document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".plan");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-show");
        }
        else {
          entry.target.classList.remove("is-show");
        }
      });
    },
    {
      threshold: 0.3 // 30%表示されたら発火
    }
  );

  targets.forEach(target => observer.observe(target));
});
