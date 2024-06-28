$(function() {
  // カルーセル
  $('.pickup_pic').slick({
    arrows: false,
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          with: '200px',
          centerPadding: '50px',
          slidesToShow: 1
        }
      }
    ]
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // ハンバーガーメニュー
  document.querySelector('.header-hamburger').addEventListener('click', function() {
    let header = document.getElementById('header-menu');
    let back = document.getElementById('back')
    if (header.classList.contains('open')) {
      header.classList.remove('open');
      back.classList.add('back-btn')
    } else {
      header.classList.add('open');
      back.classList.remove('back-btn')
    }
  });

  // #maskのエリアをクリック時メニューを閉じる
  document.getElementById('mask').addEventListener('click', function() {
    document.getElementById('header-menu').classList.remove('open');
  });

  // リンクのクリック時メニューを閉じる
  let navLinks = document.querySelectorAll('#header-navi a');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      document.getElementById('header-menu').classList.remove('open');
    });
  });

  // スムーススクロール
  let scrollLinks = document.querySelectorAll('a[href^="#"]');
  scrollLinks.forEach(function(scrollLink) {
    scrollLink.addEventListener('click', function(e) {
      e.preventDefault();
      // リンク取得
      let href = this.getAttribute('href');
      let target = href === "#" || href === "" ? document.documentElement : document.querySelector(href);
      // トップからジャンプ先要素までの距離
      let offsetTop = target.offsetTop;

      scrollTo(document.documentElement, offsetTop, 2000);
    });
  });

  function scrollTo(element, to, duration) {
    let begin = element.scrollTop,
        change = to - begin,
        currentTime = 0,
        increment = 20;

    let animateScroll = function() {
      currentTime += increment;
      let val = Math.easeInOutQuad(currentTime, begin, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  }

  Math.easeInOutQuad = function(t, b, c, d) {
    t /= d / 2;
    if (t < 1) {
      return c /2 * t * t + b;
    }
    t--;
    return -c / 2 * (t * (t - 2) -1) + b;
  };

  window.addEventListener('scroll', function() {
    document.querySelectorAll('.fadein').forEach(function(e) {
      // スクロール距離
      let scroll = window.scrollY;
      // fadeinクラス要素までの距離
      let target = e.offsetTop;
      // 画面の高さ
      let windowHeight = window.innerHeight;
  
      // fadeinクラス要素が画面下にきてから150px通過したタイミングで表示
      if (scroll > target - windowHeight + 150) {
        e.style.opacity = '1';
        e.style.transform = 'translateY(0)';
      }
    });
  });

  window.addEventListener('scroll', function() {
    this.document.querySelectorAll('.displayOn').forEach(function(e) {
      let scroll2 = window.scrollY;
      let target2 = e.offsetTop;
      let windowHeight2 = window.innerHeight;
      if (scroll2 > target2 - windowHeight2 + 500) {
        e.style.opacity = '1';
        e.style.transform = 'tanslateY(0)';
      } else {
        e.style.opacity = '0';
      }
    });
  });
});
