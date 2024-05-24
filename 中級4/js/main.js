document.addEventListener('DOMContentLoaded', function() {
    // ハンバーガーメニュー
    
    // ハンバーガーメニューをクリックした時
    document.querySelector('.header-hamburger').addEventListener('click', function() {
        hamburger();
    });
    
    // メニューのリンクをクリックした時
    document.querySelectorAll('.header-navi a').forEach(function(element) {
        element.addEventListener('click', function() {
            hamburger();
        });
    });

    // IntersectionObserverのコールバック関数を定義
    var observerCallback = function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('inview-slide-left')) {
                    // console.log('要素が表示領域に入った');
                    entry.target.classList.add('slide-left');
                } else if (entry.target.classList.contains('inview-slide-right')) {
                    // console.log('要素が表示領域に入った');
                    entry.target.classList.add('slide-right');
                } else if (entry.target.classList.contains('inview-balloon')) {
                    // console.log('要素が表示領域に入った');
                    entry.target.classList.add('balloon');
                }
            }
        });
    };

    // IntersectionObserverのオプションを設定
    var observerOptions = {
        root: null, // ビューポートを基準
        rootMargin: '0px',
        threshold: 0 // 一部でも見えたらコールバックを呼び出す
    };

    // IntersectionObserverのインスタンスを作成
    var observer = new IntersectionObserver(observerCallback, observerOptions);

    // 監視対象要素を設定
    var inviewElements = document.querySelectorAll('.inview-slide-left, .inview-slide-right, .inview-balloon');
    inviewElements.forEach(function(element) {
        observer.observe(element);
    });
});

// ハンバーガ―メニュー共通処理
function hamburger() {
    var hamburger = document.querySelector('.header-hamburger');
    var navi = document.querySelector('.header-navi');
    
    hamburger.classList.toggle('active');

    if (hamburger.classList.contains('active')) {
        // hamburgerクラスにactiveクラスが存在する場合は、naviにもactiveクラスを追加する
        navi.classList.add('active');
    } else {
        // hamburgerクラスにactiveクラスが存在しない場合は、naviからactiveクラスを削除する
        navi.classList.remove('active');
    }
}
